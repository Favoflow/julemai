var sell = {
    
//    获取位置
    getPos: function(obj){ 
        var t=0,
            l=0;
        while(obj){
            t+=obj.offsetTop;
            l+=obj.offsetLeft;
            obj=obj.offsetParent;
        }
        return {
            t:t,
            l:l
        };
    },
    
//  下一页
    linePos: function(obj){
        var _index = $('.nav-r li').index(obj),
            _t = sell.getPos($('.sell')[_index]).t-90;
        $('body,html').animate({scrollTop:_t},300);
    },
    
//    下一页
    getNext: function(obj){
        var _index = $('.to-next').index(obj);
        $('.nav-r li').eq(_index+1).trigger('click');                           
    },
    
//    监听滚动事件
    
    getScroll: function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var pos = [];
        for(var i=0;i<$('.sell').length;i++){
            pos[i] = sell.getPos($('.sell')[i]).t;
        }
        for(var i=0;i<pos.length;i++){
            if(scrollTop>=(pos[i]-100)&& scrollTop<=pos[i+1]){
                var _len = $('.nav-r li')[i].offsetWidth,
                    _l = $('.nav-r li')[i].offsetLeft;
                $('.nav-line').css({
                    '-webkit-transform': 'translate3d('+_l+'px,0,0)',
                    '-moz-transform': 'translate3d('+_l+'px,0,0)',
                    '-ms-transform': 'translate3d('+_l+'px,0,0)',
                    'transform': 'translate3d('+_l+'px,0,0)',
                    'width': _len
                });    
            }else if(i == 4&& scrollTop>pos[4]-100){
                var _len = $('.nav-r li')[4].offsetWidth,
                    _l = $('.nav-r li')[4].offsetLeft;
                $('.nav-line').css({
                    '-webkit-transform': 'translate3d('+_l+'px,0,0)',
                    '-moz-transform': 'translate3d('+_l+'px,0,0)',
                    '-ms-transform': 'translate3d('+_l+'px,0,0)',
                    'transform': 'translate3d('+_l+'px,0,0)',
                    'width': _len
                });
            }
        }
    },
    
//    权重展示
    showWeight: function(obj){
        var _name = obj.find('.weight-icon').attr('class').substring(12),
            _txt = obj.find('h4 span').html();
        $('.weight-change').find('.iconfont').removeClass().addClass(_name);
        $('.weight-change h4').html(_txt);
    }
}

$(function(){
    $('.nav-r').on('click','li',function(){
        sell.linePos($(this)[0]);
    });
    
    $('.to-next').on('click',function(){
        sell.getNext($(this)[0]);
    }); 
    
    $('.weight-list').on('mouseenter',function(){
        sell.showWeight($(this));
    });
    
    $('.to-top').on('click',function(){
        $('body,html').animate({scrollTop:0},300);
    })
    
//    监听滚动事件
    window.addEventListener('scroll',function(){
        sell.getScroll();
    });
});