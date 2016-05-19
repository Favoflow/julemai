var base = {
//    获取位置
    getPos:function(obj){
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
//    收藏
    doColl:function(_this){
        if(_this.hasClass('uncollect')){
            _this.addClass('collected').removeClass('uncollect');
        }else{
            _this.addClass('uncollect').removeClass('collected');
        }
    },
    
//    回到顶部
    toTop:function(){
        $('html,body').animate({'scrollTop':'0'},300);
    }
}

$(function(){
    var con = $('body');
    con.on('click','.collect',function(){
        base.doColl($(this));
    });
    
    con.on('click','.to-top',function(){
        base.toTop();
    })
})