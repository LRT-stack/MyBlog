let active = col_id;

//菜单PC端
function menuFunPC() {

    if (active == 'home') {
        $('.one-menu-li a').css('color', 'white');
    } else if (active == 'blog') {
        $('.one-menu-li:nth-child(2)').css('color', 'white');
    } else {
        $('.one-menu-li:nth-child(3)').css('color', 'white');
    }

    $('.one-menu-li').mouseenter(function () {
        if ($(this).find('.two-menu')) {
            $(this).find('.two-menu').show();
        }
    }).mouseleave(function () {
        $('.two-menu').hide();
    });
}


//菜单移动端
function menuFunMOB() {
    $('.one-menu-mob li').click(function () {     //点击一级菜单
        if ($(this).hasClass('down')) {
            $(this).removeClass('down');
            $(this).find('.two-menu-mob').toggle(); //二级菜单
        } else {
            //关闭其他的兄弟节点的二级菜单
            $(this).siblings().removeClass('down');
            $(this).siblings().find('.two-menu-mob').hide();

            $(this).addClass('down');               //展开二级菜单
            $(this).find('.two-menu-mob').toggle(); //二级菜单
        }

    });

    //点击菜单按钮
    $('.menu-bt img').click(function () {
        $('.menu-div').animate({ 'right': '0' }, 'slow');
    });

    //点击菜单取消按钮
    $('.cancel-bt img').click(function () {
        $('.menu-div').animate({ 'right': '-75%' }, 'slow');
        $('.one-menu-mob li').removeClass('down');
        $('.two-menu-mob').hide();
    });

    //点击菜单中登录按钮
    $('.mob-login-btn').click(function () {
        $('.menu-div').animate({ 'right': '-75%' }, 'slow'); //隐藏菜单
        $('.one-menu-mob li').removeClass('down');
        $('.two-menu-mob').hide();
        setTimeout(function(){
            $('.mob-login-div').animate({ 'right': '0' }, 'slow'); //显示登录
        },800)
    });

    //点击登录页面中的取消按钮
    $('.cancel-login-mob').click(function(){
        $('.mob-login-div').animate({ 'right': '-100%' }, 'slow'); //显示登录
    });
}

//PC登录
var loginFun = function () {
    //取消按钮
    $('.cancel-login').click(function () {
        $('.logindiv').animate({ 'top': '-400px' }, 'slow');
        setTimeout(() => {
            $('.loginspan,.pwd2,.code-bt,.regin-bt,.submit-bt').hide();
            $('.reginspan,.pwd,.login-bt,.loginCode-bt').show();
        }, 2000);
    });

    //登录框弹出动画
    $('.login-btn').click(function () {
        $('.logindiv').animate({ 'top': '100px' }, 'slow');
    });

    //登录框背景放大缩小动画
    $('.logindiv').mouseenter(function () {
        $(this).animate({ 'background-size': '110%' }, 'fast');
    }).mouseleave(function () {
        $(this).animate({ 'background-size': '100%' }, 'fast');
    });

    //点击注册 链接
    $('.regin-a').click(function () {
        $('.login-bt,.reginspan,.loginCode-bt,.submit-bt,.code-bt2').hide();
        $('.regin-bt,.pwd,.pwd2,.code-bt,.loginspan').show();
    });
    //点击登录 链接
    $('.login-a').click(function () {
        $('.loginspan,.pwd2,.code-bt,.regin-bt,.submit-bt,.code-bt2').hide();
        $('.reginspan,.pwd,.login-bt,.loginCode-bt').show();
    });

    //点击忘记密码 链接
    $('.lock').click(function () {
        $('.pwd,.pwd2,.loginCode-bt,.login-bt,.regin-bt,.code-bt').hide();
        $('.submit-bt,.code-bt2').show();
    });

    //点击获取邮箱验证码 注册
    $('.getCode').click(function () {
        let i = 60;
        $('.getCode').addClass('stopClick');
        let tim = setInterval(function () {
            i = i - 1;
            $('.getCode').html(i + '秒后获取');
            if (i == -1) {
                $('.getCode').html('获取验证码');
                $('.getCode').removeClass('stopClick');
                clearInterval(tim);
            }
        }, 1000);
    });

    //点击获取邮箱验证码 忘记密码
    $('.getCode2').click(function () {
        let i = 60;
        $('.getCode2').addClass('stopClick');
        let tim = setInterval(function () {
            i = i - 1;
            $('.getCode2').html(i + '秒后获取');
            if (i == -1) {
                $('.getCode2').html('获取验证码');
                $('.getCode2').removeClass('stopClick');
                clearInterval(tim);
            }
        }, 1000);
    });
}



menuFunPC();
menuFunMOB();
loginFun();



//禁止右键
// document.oncontextmenu=function(){
//     return false;
// }

//禁止 F12
// document.onkeydown=function (e){
//     var currKey=0,evt=e||window.event;
//     currKey=evt.keyCode||evt.which||evt.charCode;
//     if (currKey == 123) {
//         window.event.cancelBubble = true;
//         window.event.returnValue = false;
//     }
// }
