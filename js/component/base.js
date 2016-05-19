var com = {
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
        com.doColl($(this));
    });
    
    con.on('click','.to-top',function(){
        com.toTop();
    })
})