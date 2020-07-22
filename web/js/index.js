let active = col_id;
//菜单
function menuFun(){
    if(active == 'home'){
        $('.one-menu-li a').css('color','white');
    }else if(active == 'blog'){
        $('.one-menu-li:nth-child(2)').css('color','white');
    }else{
        $('.one-menu-li:nth-child(3)').css('color','white');
    }
    $('.one-menu-li').mouseenter(function(){
        if($(this).find('.two-menu')){
            $(this).find('.two-menu').show();
        }
    }).mouseleave(function(){
        $('.two-menu').hide();
    });
}
menuFun();