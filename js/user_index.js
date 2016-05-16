$(function(){
    var con = $('body');
//    方法-s
    var index = { 
//        选择时间
        timeMove:{
            timePos: 0,
            timeEnter:function(_this,par,obj){
                var _nIndex = par.index(_this);
                _this.addClass('active').siblings().removeClass('active');
                obj.css({
                    '-webkit-transform':'translate3d('+_nIndex*100+'%,0,0)',
                    '-moz-transform':'translate3d('+_nIndex*100+'%,0,0)',
                    '-ms-transform':'translate3d('+_nIndex*100+'%,0,0)',
                    'transform':'translate3d('+_nIndex*100+'%,0,0)'
                });
            },
            timeOut:function(obj,_index){
                $('.timebar li').eq(_index).addClass('active').siblings().removeClass('active');
                obj.css({
                    '-webkit-transform':'translate3d('+_index*100+'%,0,0)',
                    '-moz-transform':'translate3d('+_index*100+'%,0,0)',
                    '-ms-transform':'translate3d('+_index*100+'%,0,0)',
                    'transform':'translate3d('+_index*100+'%,0,0)'
                });   
            },
            timeClick:function(_this,par){
                var _index = par.index(_this);
                index.timeMove.timePos = _index;
                _this.addClass('active').siblings().removeClass('active');
            },
            timeScroll: function(){
                
            }
        }
    }
//    方法-e
    
    //    轮播
    $('#myCarousel').carousel({
        interval: 4000,
    });
    $('#myCarousel').carousel('cycle');
    
//    抢购时间
    con.on('mouseenter','.timebar li',function(){
        index.timeMove.timeEnter($(this),$('.timebar li'),$('.timebar-active'));
    });
    
    con.on('mouseleave','.timebar',function(){
        index.timeMove.timeOut($('.timebar-active'),index.timeMove.timePos);
    });
    
    con.on('click','.timebar li',function(){
        index.timeMove.timeClick($(this),$('.timebar li'));
    });
});