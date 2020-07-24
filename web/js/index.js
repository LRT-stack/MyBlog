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

//PC登录
var loginFun = function(){
    //取消按钮
    $('.cancel-login').click(function(){        
        $('.logindiv').animate({'top':'-400px'},'slow');
        setTimeout(() => {
            $('.loginspan,.pwd2,.code-bt,.regin-bt,.submit-bt').hide();
            $('.reginspan,.pwd,.login-bt,.loginCode-bt').show();
        },2000);
    });

    //登录框弹出动画
    $('.login-btn').click(function(){
        $('.logindiv').animate({'top':'100px'},'slow');
    });

    //登录框背景放大缩小动画
    $('.logindiv').mouseenter(function(){
        $(this).animate({'background-size':'110%'},'fast');
    }).mouseleave(function(){
        $(this).animate({'background-size':'100%'},'fast');
    });

    //点击注册 链接
    $('.regin-a').click(function(){
        $('.login-bt,.reginspan,.loginCode-bt,.submit-bt').hide();
        $('.regin-bt,.pwd,.pwd2,.code-bt,.loginspan').show();
    });
    //点击登录 链接
    $('.login-a').click(function(){
        $('.loginspan,.pwd2,.code-bt,.regin-bt,.submit-bt').hide();
        $('.reginspan,.pwd,.login-bt,.loginCode-bt').show();
    });

     //点击忘记密码 链接
     $('.lock').click(function(){
        $('.pwd,.pwd2,.loginCode-bt,.login-bt,.regin-bt').hide();
        $('.code-bt,.submit-bt').show();
    });
}



menuFunPC();
menuFunMOB();
loginFun();