$(function(){
/* ===========================ナビメニュー===================================*/
    $('#humberger').click(function() {
        $('#slide').removeClass('slide-none');
        $('#slide').addClass('op');
        $('body').addClass('noscroll');
    });
    $('#slide__close').click(function(){
        $('#slide').addClass('slide-none');
        $('#slide').removeClass('op');
        $('body').removeClass('noscroll');
    });
/* ===========================ナビメニュー===================================*/
/* ===========================ヘッダースクロール===================================*/
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $('.header').css('background-color','white');
            $('.humberger-btn__bar').css('background-color','black');
            $('.header-logo__title').css('color','black');
            $('.nav__link_white').css('color','black');
            $('.header-logo__icon img').attr('src','img/sakura-icon-border-black.png');
        }else{
            $('.header').css('background-color','transparent');
            $('.humberger-btn__bar').css('background-color','white');
            $('.header-logo__title').css('color','white');
            $('.nav__link_white').css('color','white');
            $('.header-logo__icon img').attr('src','img/sakura-white-icon.png');
        }
    });
/* ===========================ヘッダースクロール===================================*/  
/* ===========================キービジュアルfadeIn===================================*/
    $('#kv-wrapper li:not(:first-child)').hide();
    current = 1;
    next = 2;
    timer = setInterval(slideTimer,5000);
    function slideTimer(){
        $('#kv-wrapper li:nth-child('+current+')').stop().fadeOut(500);
        $('#kv-wrapper li:nth-child('+next+')').stop().fadeIn(500);
        current = next;
        next = ++next;
        if(next>3){
            next = 1;
        }
    }
/* ===========================キービジュアルfadeIn===================================*/
/* ===========================モーダル===================================*/
    $('#reserve-btn').click(function(){
        $('#modal__musk,#modal').fadeIn();
        $('body').addClass('noscroll');
    });
    $('#modal__close,#modal__musk').click(function(){
        $('#modal__musk,#modal').fadeOut();
        $('body').removeClass('noscroll');
    });
/* ===========================モーダル===================================*/
/* ===========================お知らせTAB===================================*/
    $('.tabs li').click(function(){
        var liindex = $(this).index();
        $('.tab-item').removeClass('tab-active');
        $('.tab-item').eq(liindex).addClass('tab-active');
        $('.tab').removeClass('under-line');
        $(this).children('a').addClass('under-line')
    });
/* ===========================お知らせTAB===================================*/
});






/* ===========================flatpickr===================================*/
const config = {
    mode: "range",
    minDate: "today",
  }
flatpickr("input[type=datetime-local]", config);
/* ===========================flatpickr===================================*/
/* ===========================aos.js===================================*/
AOS.init({
    offset: -200,
    duration: 1500,
    easing: 'ease-in',
  });
/* ===========================aos.js===================================*/