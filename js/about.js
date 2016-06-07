$(function(){
    var con = $('body');
    con.on('click','.first-menu',function(){
        if($(this).parents('li').hasClass('open')){
            $(this).parents('li').removeClass('open');
        }else{
            $(this).parents('li').addClass('open');
        }
    })
})