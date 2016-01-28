/**
 * Created by KeyserSoze on 26/01/2016.
 */

var _game;

function game(){
    var actions = 0;
    var c = new Clock();
    var v = new Variables();
    var m = new Matrix(7,6);
    var tool = new Tooltip(v);
    var t = new Turn(v.getValue("numPlayers"));


    var p = new Array();
    var lightColor = d3.scale.linear()
        .interpolate(d3.interpolateHcl)
        .domain([0,v.getValue("numPlayers")-1])
        .range(["#D49090","#90D4D4","#B290D4","#B2D490"]);
    var color = d3.scale.linear()
        .interpolate(d3.interpolateHcl)
        .domain([0,v.getValue("numPlayers")-1])
        .range(["#D43232","#20D4D4","#7A20D4","#7AD420"]);

    //var color = d3.scale.category20().domain([0,v.getValue("numPlayers")-1]);
    d3.range(v.getValue("numPlayers")).forEach(function(d){
        p.push(new Player(d,color(d)))
    });

    function colorPad(){
        if(v.getValue("pad","elem")){
            v.getValue("pad","elem")
                .transition()
                .duration(v.getValue("transitionDuration"))
                .attr('fill',lightColor( ( (t.getTurn())+(v.getValue("numPlayers") / 2 ) ) % v.getValue("numPlayers") ) );
        }
    }

    function anim(col,row,turn,time){
        v.setValue(
            "chip-"+col+"-"+row
            ,v.getValue("chips","elem")
                .datum({col:col,row:row,turn:turn,time:time,action:actions,setted:false})
                .append('g')
                .attr('id',"chip-"+col+"-"+row)
                .attr('transform', function(d){ return "translate(" + parseFloat(10+col*100) + "," + parseFloat(10) + ")"})
            , "elem");
        v.getValue("chip-"+col+"-"+row,"elem")
            .append('circle')
            .attr('r', 23.4)
            .attr('cx','40')
            .attr('cy','40')
            .style('fill',color(turn));
        v.getValue("chip-"+col+"-"+row,"elem")
            .append('path')
            .attr('d', v.getValue('chip0','svg'))
            .style('fill',color(turn));
        v.getValue("chip-"+col+"-"+row,"elem")
            .append('path')
            .attr('d', v.getValue('chip1','svg'))
            .style('fill',color(turn));
        v.getValue("chip-"+col+"-"+row,"elem")
            .transition()
                .duration(v.getValue("transitionDuration"))
                .ease('bounce')
                .attr('transform',function(d){ return "translate(" + parseFloat(10+col*100) + "," + parseFloat(700-80-(10+row*100)) + ")"})
                .each('end',function(){
                    d3.select(this).data()[0].setted = true;
                    d3.select(this).attr('id',"setted-chip-"+col+"-"+row)
                });
        v.getValue("chip-"+col+"-"+row,"elem")
            //.on('click',function(d){        //Left Btn
            .on('contextmenu',function(d){  // Right Btn

                if(d.turn == (t.getTurn()+1) % v.getValue("numPlayers")){
                    var r = v.getValue("chips","elem")
                        .selectAll("g[id^='setted-chip-']")[0]
                        .filter(function(e){
                            if(d3.select(e).data()[0].action >= d.action && d3.select(e).data()[0].setted)
                                return e;
                        });
                    r.forEach(function(e){
                        if(d3.select(e).data()[0].setted==true) {
                            console.log(d3.select(e).data()[0]);
                            actions--;
                            console.log(d3.transform(e.attr('transform')));
                        }
                    });
                }
            })
            .on('mouseenter', function(d) {
                if(d.setted==true){
                    var r = v.getValue("chips","elem")
                        .selectAll("g[id^='setted-chip-']")[0]
                        .filter(function(e){
                            if(d3.select(e).data()[0].action >= d.action && d3.select(e).data()[0].setted)
                                return e;
                        })
                        .forEach(function(e){
                            if(d3.select(e).data()[0].setted==true) {
                                d3.select(e).transition()
                                    .duration(v.getValue("transitionDuration"))
                                    .attr('opacity', '.2');
                            }
                        });
                    v.setValue("toolTip",
                        tool.create(d.col, d.row,{player:d.turn, elapsed:(d.time/1000)+" s"}, v.getValue("svg","elem")),
                        "elem");
                }
            })
            .on('mousemove',function(d){
                tool.move(v.getValue("svg","elem"));
            })
            .on('mouseleave', function(d) {
                if(d.setted==true) {
                    v.getValue("chips", "elem")
                        .selectAll("g[id^='setted-chip-']")
                        .transition()
                        .duration(v.getValue("transitionDuration"))
                        .attr('opacity', '1');
                    tool.remove();
                }
            });
        colorPad();
        actions++;
    }
    this.anim = function(col,row,turn){
        anim(col,row,turn);
    };

    this.resize = function(){
        v.getValue("svg","elem")
            .attr('width',$(v.getValue("startingElem","elem")[0]).width())
            .attr('height',$(v.getValue("startingElem","elem")[0]).height());
        v.setValue('width',$(v.getValue("startingElem","elem")[0]).width());
        v.setValue('height',$(v.getValue("startingElem","elem")[0]).height());
        var difference = Math.abs(v.getValue('width')-v.getValue('height'));
        v.setValue("scale", d3.min([v.getValue('width'), v.getValue('height')])/700);
        if(v.getValue('width')>v.getValue('height')){   //Horizontal screen
            v.getValue("g","elem").attr('transform',"translate("+difference/2+","+0+") scale("+ v.getValue("scale")+")");
        }else{                                          //Vertical Screen
            v.getValue("g","elem").attr('transform',"translate("+0+","+difference/2+") scale("+ v.getValue("scale")+")");
        }
    }

    this.create = function(elem){
        v.setValue("startingElem", elem, "elem");
        //elem.css("z-index","999");
        elem.css("position","absolute");
        elem.css("background","#000000");
        elem.css("width",'100%');
        elem.css("height",'100%');
        elem.css("overflow","hidden");


        v.setValue("height", elem.innerHeight());
        v.setValue("width", elem.innerWidth());
        v.setValue(
            "svg"
            , d3.select(elem[0])
                .append('svg')
                .attr("width", v.getValue("width"))
                .attr("height", v.getValue("height"))
            , "elem");
        v.setValue(
            "g"
            , v.getValue("svg","elem")
                .append('g')
            , "elem");
        v.setValue(
            "buttons"
            , v.getValue("g","elem")
                .append('g')
                .attr('id','buttons')
            , "elem");
        v.setValue(
            "chips"
            , v.getValue("g","elem")
                .append('g')
                .attr('id','chips')
            , "elem");
        v.setValue(
            "pad"
            , v.getValue("g","elem")
                .append('path')
                .attr('d', v.getValue("pad","svg"))
            , "elem");
        d3.range(7).forEach(function(d){
            v.setValue(
                "col" + d
                , v.getValue("buttons","elem")
                    .append('circle')
                    .attr('r', 40)
                    .attr('cx',50+d*100)
                    .attr('cy',50)
                    .style('fill','transparent')
                    .on('click',function(){
                        var pos = {col: d, row: m.push(d,t.getTurn())};
                        if(m.check(t.getTurn()))
                        {
                            t.nextTurn();
                            var turn = t.getTurn();
                            var interval = c.getInterval();
                            p[turn].setMovement(pos.col, pos.row, interval);
                            anim(pos.col,pos.row,turn, interval);
                            //end Game;
                            ModalBox(
                                v.getValue("width")
                                , v.getValue("height")
                                , p
                                , (t.getTurn())
                                , c.getTotal()
                            );
                        }
                        else{
                            if(!isNaN(pos.row)) {
                                t.nextTurn();
                                var turn = t.getTurn();
                                var interval = c.getInterval();
                                p[turn].setMovement(pos.col, pos.row, interval);
                                anim(pos.col,pos.row,turn, interval);
                            }
                        }
                    })
                , "elem");
        });
        colorPad();

        $( window ).resize(function() {
            _game.resize();
        });
    };
}

$(document).ready(function(){
    _game = new game();
    _game.create($('body #container'));
    _game.resize();
});