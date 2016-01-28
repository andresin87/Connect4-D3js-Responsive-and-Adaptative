/**
 * Created by KeyserSoze on 26/01/2016.
 */

/*
 * GAME VARIABLES
 */

function Variables(){
    this['data'] = {};
    this.setValue = function(variable,value, scope){
        if(scope){
            if(!this[scope]) this[scope] = {};
            this[scope][variable] = value;
        }
        else
            this['data'][variable] = value;
    };

    this.getValue = function(value, scope){
        if(scope)   return (this[scope]) ? this[scope][value] : null;
        else        return this['data'][value];
    };

    this.remove = function(value,scope){
        if(scope)   (this[scope]) ? delete this[scope][value] : null;
        else        delete this['data'][value];
    }

    this.getScope = function(scope){
        return this[scope];
    };

    this.setValue("numPlayers",2);
    this.setValue("transitionDuration",800);
    this.setValue("height",window.innerHeight);
    this.setValue("width",window.innerWidth);
    this.setValue("time",null);
    this.setValue("pad","M0,100v600h700V100H0z M50,690c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C90,672.1,72.1,690,50,690z M50,590c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C90,572.1,72.1,590,50,590z M50,490 c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C90,472.1,72.1,490,50,490z M50,390c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C90,372.1,72.1,390,50,390z M50,290c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C90,272.1,72.1,290,50,290z M50,190c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C90,172.1,72.1,190,50,190z M150,690 c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C190,672.1,172.1,690,150,690z M150,590c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C190,572.1,172.1,590,150,590z M150,490c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40 s40,17.9,40,40C190,472.1,172.1,490,150,490z M150,390c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C190,372.1,172.1,390,150,390z M150,290c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C190,272.1,172.1,290,150,290z M150,190c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C190,172.1,172.1,190,150,190z M250,690c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C290,672.1,272.1,690,250,690z M250,590c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40 s40,17.9,40,40C290,572.1,272.1,590,250,590z M250,490c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C290,472.1,272.1,490,250,490z M250,390c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C290,372.1,272.1,390,250,390z M250,290c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C290,272.1,272.1,290,250,290z M250,190c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C290,172.1,272.1,190,250,190z M350,690c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40 s40,17.9,40,40C390,672.1,372.1,690,350,690z M350,590c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C390,572.1,372.1,590,350,590z M350,490c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C390,472.1,372.1,490,350,490z M350,390c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C390,372.1,372.1,390,350,390z M350,290c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C390,272.1,372.1,290,350,290z M350,190c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40 s40,17.9,40,40C390,172.1,372.1,190,350,190z M450,690c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C490,672.1,472.1,690,450,690z M450,590c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C490,572.1,472.1,590,450,590z M450,490c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C490,472.1,472.1,490,450,490z M450,390c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C490,372.1,472.1,390,450,390z M450,290c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40 s40,17.9,40,40C490,272.1,472.1,290,450,290z M450,190c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C490,172.1,472.1,190,450,190z M550,690c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C590,672.1,572.1,690,550,690z M550,590c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C590,572.1,572.1,590,550,590z M550,490c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C590,472.1,572.1,490,550,490z M550,390c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40 s40,17.9,40,40C590,372.1,572.1,390,550,390z M550,290c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C590,272.1,572.1,290,550,290z M550,190c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C590,172.1,572.1,190,550,190z M650,690c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C690,672.1,672.1,690,650,690z M650,590c-22.1,0-40-17.9-40-40 c0-22.1,17.9-40,40-40s40,17.9,40,40C690,572.1,672.1,590,650,590z M650,490c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40 s40,17.9,40,40C690,472.1,672.1,490,650,490z M650,390c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40 C690,372.1,672.1,390,650,390z M650,290c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C690,272.1,672.1,290,650,290z M650,190c-22.1,0-40-17.9-40-40c0-22.1,17.9-40,40-40s40,17.9,40,40C690,172.1,672.1,190,650,190z",'svg');
    this.setValue("chip0","M40,66.8c14.8,0,26.8-12,26.8-26.8c0-14.8-12-26.8-26.8-26.8S13.2,25.2,13.2,40 C13.2,54.8,25.2,66.8,40,66.8z M40,14.1c14.3,0,25.9,11.6,25.9,25.9c0,14.3-11.6,25.9-25.9,25.9c-14.3,0-25.9-11.6-25.9-25.9 C14.1,25.7,25.7,14.1,40,14.1z","svg");
    this.setValue("chip1","M80,40c0,22.1-17.9,40-40,40C17.9,80,0,62.1,0,40C0,17.9,17.9,0,40,0C62.1,0,80,17.9,80,40z M46.4,76.3 l-1.1-6.3c-2.5,0.4-5.2,0.6-7.7,0.4l-0.5,6.3c1,0.1,1.9,0.1,2.9,0.1C42.2,76.9,44.3,76.7,46.4,76.3z M35.3,70.2 c-0.2,0-0.4-0.1-0.6-0.1l-1.1,6.3c0.2,0,0.5,0.1,0.7,0.1L35.3,70.2z M49.8,75.5l-1.7-6.1c-0.7,0.2-1.5,0.4-2.3,0.5l1.2,6.2 C48,76,48.9,75.8,49.8,75.5z M27.3,67.8c-0.7-0.3-1.4-0.7-2.1-1l-3.1,5.6c0.8,0.5,1.7,0.9,2.5,1.3L27.3,67.8z M24.8,66.4 c-2.2-1.3-4.3-2.9-6.1-4.7l-4.5,4.5c2.2,2.2,4.7,4.1,7.4,5.7L24.8,66.4z M59.1,71.6l-3.3-5.4c-0.2,0.1-0.3,0.2-0.5,0.3l3.2,5.5 C58.7,71.8,58.9,71.7,59.1,71.6z M68.3,63.7l-4.9-4.1c-1.7,2-3.6,3.7-5.7,5.2l3.7,5.2C63.9,68.2,66.2,66.1,68.3,63.7z M17,60.1 c-0.1-0.1-0.3-0.3-0.4-0.4l-4.9,4.1c0.2,0.2,0.3,0.4,0.5,0.5L17,60.1z M70.4,60.9l-5.2-3.6c-0.4,0.6-0.9,1.3-1.4,1.9l4.9,4 C69.3,62.4,69.9,61.7,70.4,60.9z M12.4,53.1c-0.3-0.7-0.6-1.4-0.9-2.1l-5.9,2.3c0.3,0.9,0.7,1.7,1.1,2.6L12.4,53.1z M11.3,50.5 c-0.9-2.4-1.5-5-1.7-7.5l-6.3,0.6c0.3,3.1,1,6.2,2.1,9.1L11.3,50.5z M74.9,51.9l-6-2.1c-0.1,0.2-0.1,0.4-0.2,0.6l6,2.2 C74.7,52.4,74.8,52.2,74.9,51.9z M76.7,40v-0.5h-6.5V40c0,2.6-0.2,5.2-0.8,7.7l6.2,1.6C76.3,46.2,76.7,43.1,76.7,40z M9.5,40.6 c0-0.2,0-0.4,0-0.6l-6.4,0c0,0.2,0,0.5,0,0.7L9.5,40.6z M76.9,39.2c0-0.9-0.1-1.9-0.2-2.8L70.4,37c0.1,0.8,0.1,1.5,0.1,2.3 L76.9,39.2z M11.1,30.1l-6-2.1c-0.3,0.9-0.6,1.8-0.8,2.7l6.2,1.6C10.6,31.6,10.9,30.9,11.1,30.1z M14.8,22.7l-5.2-3.6 c-1.8,2.6-3.2,5.4-4.3,8.3l6,2.2C12.2,27.2,13.4,24.9,14.8,22.7z M74.6,27.3c-0.1-0.2-0.2-0.4-0.2-0.7L68.5,29 c0.1,0.2,0.1,0.4,0.2,0.5L74.6,27.3z M73.3,24.1c-1.3-2.8-3.1-5.4-5.1-7.8l-4.9,4.1c1.7,2,3.1,4.2,4.2,6.5L73.3,24.1z M16.6,20.4 l-4.9-4.1c-0.2,0.2-0.3,0.4-0.4,0.5l5,4C16.3,20.7,16.5,20.6,16.6,20.4z M67.8,15.7c-0.6-0.7-1.3-1.4-1.9-2l-4.5,4.5 c0.6,0.5,1.1,1.1,1.6,1.7L67.8,15.7z M24.2,13.9l-3.3-5.4c-0.8,0.5-1.6,1-2.3,1.5l3.7,5.2C22.9,14.7,23.5,14.3,24.2,13.9z M31.8,10.6l-1.7-6.1c-3,0.8-5.9,2.1-8.6,3.6l3.2,5.5C26.9,12.3,29.3,11.3,31.8,10.6z M58.4,8c-0.2-0.1-0.4-0.2-0.6-0.3l-3.1,5.6 c0.2,0.1,0.3,0.2,0.5,0.3L58.4,8z M55.3,6.4c-2.8-1.3-5.8-2.2-8.9-2.8l-1.1,6.3c2.5,0.4,5,1.2,7.4,2.3L55.3,6.4z M34.6,10l-1.1-6.3 c-0.2,0-0.5,0.1-0.7,0.1l1.2,6.2C34.3,10,34.5,10,34.6,10z M45.6,3.6c-0.9-0.1-1.9-0.2-2.8-0.3l-0.5,6.3c0.8,0.1,1.5,0.1,2.3,0.3 L45.6,3.6z M40,13.2c-14.8,0-26.8,12-26.8,26.8c0,14.8,12,26.8,26.8,26.8s26.8-12,26.8-26.8C66.8,25.2,54.8,13.2,40,13.2z M67.8,40 c0-15.3-12.5-27.8-27.8-27.8c-15.3,0-27.8,12.5-27.8,27.8c0,15.3,12.5,27.8,27.8,27.8C55.3,67.8,67.8,55.3,67.8,40z M65.9,40 c0,14.3-11.6,25.9-25.9,25.9c-14.3,0-25.9-11.6-25.9-25.9S25.7,14.1,40,14.1C54.3,14.1,65.9,25.7,65.9,40z",'svg');
    this.setValue("close","M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100S155.2,0,100,0z M75,57.4l25,25l25-25L142.6,75 l-25,25l25,25L125,142.6l-25-25l-25,25L57.4,125l25-25l-25-25L75,57.4z","svg")
}

function Matrix(_col,_row){
    var col = _col;
    var row = _row;
    var data = new Array(col);
    this.data = data;

    d3.range(col).forEach(function(d){
        data[d] = new Array(row);
        d3.range(row).forEach(function(e){
            data[d][e] = null;
        });
    });

    this.push = function(column,player){
        var ret = d3.min(
            data[column].map(function(d,i){
                return i+1;
            }).filter(function(d){
                if(data[column][d-1]==null)
                    return d;
            })
        );

        if( !(0 > ret || ret >= col) ){
            data[column][ret-1] = player;
            return ret-1;
        }
        else return false;
    }

    this.check = function(player){
        var ret = false;
        var r = new Array();
        // check cols
        d3.range(col).forEach(function(d){
            d3.range(row).forEach(function(e){
                if(data[d][e] == player){
                    r.push({col:d,row:e});
                }
                else{ r = new Array(); }
                if(r.length == 4){
                    ret = r;
                }
            });
        });

        // check rows
        d3.range(row).forEach(function(d){
            d3.range(col).forEach(function(e){
                if(data[e][d] == player){
                    r.push({col:e,row:d});
                }
                else{ r = new Array(); }
                if(r.length == 4){
                    ret = r;
                }
            });
        });

        // check first diagonal

        return ret;
    }
}

function Clock(){
    var total = new Date();
    var interval = new Date();

    this.getTotal = function(){
        return new Date().getTime() - total.getTime();
    };
    this.getInterval = function(){
        var ret = new Date().getTime() - interval.getTime();
        interval = new Date();
        return ret;
    };
    this.setInterval = function(d){
        interval = new Date(d);
    };
}

/*
 * Player func
 *  int index: the index stored in matrix
 *  HEX color: the chip color
 *  String type: default null ("auto" if 1 VS Machine mode)
 */

function Player(index,color,type){
    this.index = index;
    this.color = color;
    this.type = type;
    this.movementList = new Array();
    this.time = function(){
        return d3.sum(
            movementList.map(function(d){return time})
        );
    }

    this.setMovement = function(col,row,time){
        var temp = {pos:{col:col,pos:row},time:time};
        this.movementList.push({pos:{col:col,pos:row},time:time});
    }
}

function Turn(numPlayers){
    var turn = -1;
    var mod = numPlayers;
    this.getTurn = function(){
        return (turn + 1 ) % mod;
    }
    this.nextTurn = function(){
        turn++;
    }
}

// The chip hover unique element
function Tooltip(v){
    var element;

    this.create = function(x,y,textObj,el){
        element = d3.select(el[0][0])
                .append('g')
                .datum({col:x,row:y,text:textObj})
                .attr('id',"toolTip");

        for(var key in textObj) {
            element.append('text')
                .attr('text-anchor','middle')
                .style('fill','#FFFFFF')
                .attr("transform","translate(" + 0 + "," + (-element.node().getBBox().y) + ")")
                .text(function(d){return key+": "+textObj[key]});
        }
        element.attr('transform', function(d){ return "translate(" + d3.mouse(el[0][0])[0] + "," + (d3.mouse(el[0][0])[1]+element.node().getBBox().y*2) + ")"});

        return element;
    };
    this.move = function(el){
        if(element)
            element
                .attr('transform', function(d){ return "translate(" + d3.mouse(el[0][0])[0] + "," + (d3.mouse(el[0][0])[1]+element.node().getBBox().y*2) + ")"});
    };
    this.remove = function(){
        if(element){
            element.remove();
            v.remove("toolTip","elem");
            delete element;
        }
    };
}

function ModalBox(_width,_height,players,winner,timestart){
    $('body').append('<div id="modalbox"></div>')
    $('#modalbox').css("z-index","999");
    $('#modalbox').css("position","absolute");
    $('#modalbox').css("background","rgba(212,209,50,.8)");    //#D4D132
    $('#modalbox').css("width",_width);
    $('#modalbox').css("height",_height);
    $('#modalbox').css("overflow","hidden");
    $('#modalbox').css("padding","5%");

    $('#modalbox').append('<div id="closeModal"></div>');
    $('#modalbox > #closeModal').append('<div style="position: relative;"><div style="position: absolute;right:0;"><button onclick="$('+"'"+'#modalbox'+"'"+').remove()" style="border: none;background: transparent;"><svg width="100" height="100"><g transform="scale(.5)"><path d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100S155.2,0,100,0z M75,57.4l25,25l25-25L142.6,75 l-25,25l25,25L125,142.6l-25-25l-25,25L57.4,125l25-25l-25-25L75,57.4z" fill="#000" opacity=".1"/></g></svg></button></div></div>');

    $('#modalbox').append('<div id="modalContainer" style="margin: 100px;"></div>');
    $('#modalbox > #modalContainer').append('<div id="winner" ><h1 style="    font-weight: 900;text-align: center;">Player '+winner+' wins!</h1></div>');
    var width = _width * (.9) - 200 - $('#modalbox h1#winner').width();
    var height = _height * (.9) - 200 - $('#modalbox h1#winner').height();

    $('#modalbox > #modalContainer').append('<svg id="comparor" height="'+height+'" width="'+width+'"><g id="redim" transform="scale(1,1)"><g id="plot"></g></g></g></svg>');

    var svg = $('#modalbox > #modalContainer #comparor');
    var redim = $('#modalbox > #modalContainer #redim');
    var g = $('#modalbox > #modalContainer #plot');
    g.attr('transform','translate(0,'+height/2+')');

    if(players[1].movementList.length>0 && players[0].movementList.length>0) {

        var dataP1 = new Array();
        var dataP2 = new Array();

        var sum = 0;
        var total=0;
        if(players[1].movementList[0]){
            total = players[1].movementList[0].time/1000+0;
            sum = players[1].movementList[0].time/1000+0;
            dataP1.push({pos:null,time:total,val:0});
        }
        for(var key in players[0].movementList){
            dataP1.push({pos:players[0].movementList[key].pos,time:total+players[0].movementList[key].time/1000,val:sum});
            sum += players[0].movementList[key].time/1000;
            total += (players[1].movementList[key].time/1000)+(players[0].movementList[key].time/1000);;
        }
        dataP1.push({pos:players[0].movementList[key].pos,time:total+players[0].movementList[key].time/1000,val:sum});

        var total = 0;
        var sum = 0;
        dataP2.push({pos:players[1].movementList[key].pos,time:0,val:0});
        for(var key in players[1].movementList){
            dataP2.push({pos:players[1].movementList[key].pos,time:total+players[1].movementList[key].time/1000,val:(-sum)});
            sum+=(players[1].movementList[key].time/1000);
            if(key!=0) total+=(players[1].movementList[key].time/1000)+(players[0].movementList[key-1].time/1000);
            else  total+=(players[1].movementList[key].time/1000)+0;
        }
        console.log(d3.min(dataP2.map(function(d){return d.val;})));
        console.log(d3.max(dataP1.map(function(d){return d.val;})));
        var x = d3.scale.linear().domain([0, timestart/1000]).range([0, width]);
        var y = d3.scale.linear()
                    .domain(
                        [
                            d3.min(dataP2.map(function(d){return d.val;}))
                            ,d3.max(dataP1.map(function(d){return d.val;}))
                        ]
                    ).range([height/2, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .tickSize(dataP1.length+dataP2.length)
            .tickFormat(d3.format("f"))
            .tickSubdivide(true);
        var yAxis = d3.svg.axis()
            .scale(y)
            .tickSize(5)
            .orient('right')
            .tickFormat(d3.format("f"))
            .tickSubdivide(true);
        d3.select(g[0]).append('g')
            .attr('class', 'x axis')
            .call(xAxis);
        d3.select(g[0]).append('g')
            .attr('class', 'y axis')
            .attr('transform','translate(0,'+(-y(0))+')')
            .call(yAxis);

        var line = d3.svg.line()
            .x(function(d) {
                return x(d.time);
            })
            .y(function(d) {
                return y(d.val);
            });

        d3.select(g[0]).append('path')
            .datum(dataP2)
            .attr("class", "dataP2")
            .attr('transform','translate(0,'+(-y(0))+')')
            .style('stroke-width','2px')
            .style('stroke',players[0].color)
            .style('fill','none')
            .attr("d", line);
        d3.select(g[0]).append('path')
            .datum(dataP1)
            .attr("class", "dataP1")
            .attr('transform','translate(0,'+(-y(0))+')')
            .style('stroke-width','2px')
            .style('stroke',players[1].color)
            .style('fill','none')
            .attr("d", line);
    }

}
