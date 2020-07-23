let active = col_id;

//菜单PC端
function menuFunPC(){

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


//菜单移动端
function menuFunMOB(){
    $('.one-menu-mob li').click(function(){     //点击一级菜单
        // if($(this).find('.two-menu-mob')){          
        //     $(this).addClass('down');           //箭头向下
        //     $(this).find('.two-menu-mob').toggle(); //二级菜单
        // }

        // if($(this).find('.two-menu-mob').hide()){
        //     $(this).removeClass('down');           
        // }

        // if($(this).find('.two-menu-mob').hide()){
        //     $(this).addClass('down');           //箭头向下
        //     $(this).find('.two-menu-mob').toggle();
        // }else{
        //     $(this).removeClass('down');           //箭头向下
        //     $(this).find('.two-menu-mob').toggle();
        // }
    });

    $('.menu-bt img,.cancel-bt img').click(function(){
        $('.head-mob-row2').toggle();
    });
    
    
}

menuFunPC();
menuFunMOB();