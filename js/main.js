$(function(){
    //햄버거메뉴 버튼
    $('.menu_btn').click(function(){
        $('.nav').animate({'right':0});
    })
    $('.close').click(function(){
        $('.nav').animate({'right':'-100vw'});
    })

    
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        mousewheel:{invert:false},
        keyboard: {enabled:false}
    });

    //탭메뉴
    $('.tab_content > div').hide();
    $('.con1').show();
    $('.t1').click(function(){
        $('.con1').fadeIn();
        $('.con2').hide();
        $('.con3').hide();
        $('.con4').hide();
        $('.t1').addClass('active')
        $('.t2').removeClass('active')
        $('.t3').removeClass('active')
        $('.t4').removeClass('active')
    });
    $('.t2').click(function(){
        $('.con2').fadeIn();
        $('.con1').hide();
        $('.con3').hide();
        $('.con4').hide();
        $('.t2').addClass('active')
        $('.t1').removeClass('active')
        $('.t3').removeClass('active')
        $('.t4').removeClass('active')
    });
    $('.t3').click(function(){
        $('.con3').fadeIn();
        $('.con1').hide();
        $('.con2').hide();
        $('.con4').hide();
        $('.t3').addClass('active')
        $('.t1').removeClass('active')
        $('.t2').removeClass('active')
        $('.t4').removeClass('active')
    });
    $('.t4').click(function(){
        $('.con4').fadeIn();
        $('.con1').hide();
        $('.con2').hide();
        $('.con3').hide();
        $('.t4').addClass('active')
        $('.t1').removeClass('active')
        $('.t2').removeClass('active')
        $('.t3').removeClass('active')
    });

    //위로 올라가기 버튼
    $('.tothetop').click( function() {
        $('html, body').animate( { scrollTop : 0 }, 400 ); return false;
    } );

    //아코디언 메뉴
    // $('.nav nav > ul > li').click(function(e){
    //     e.prevent.Default();
    //     if($(this).attr('class') != 'active') {
    //         $('.nav nav > ul > li > a').removeClass('active');
    //         $(this).addClass('active');
    //         $('.sub').stop().slideUp();
    //         $(this).next().stop().slideToggle();
    //     }else{
    //         $(this).removeClass('active');
    //         $(this).next().stop().slideUp();
    //     }
    // })

    
})