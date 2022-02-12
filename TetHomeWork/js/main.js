$(document).ready(function(){
    $(window).resize(function(){
        var viewportWidth = $(window).width();
        if(viewportWidth <= 767){
            $('.menu__sub').hide();
            $(document).on('click','.header .header__menu > li',function(){
                $('.menu__sub').slideUp();
                if($(this).find('.fas').hasClass('fa-chevron-right')){
                    $('.header__menu .fas').removeClass('fa-chevron-down').addClass('fa-chevron-right');
                    $(this).find('.fas').removeClass('fa-chevron-right').addClass('fa-chevron-down');
                    $(this).find('.menu__sub').slideDown();
                }
                else{
                    $(this).find('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-right');
                }
            });
            $(document).on('click','.menu__phone',function(){
                if($(this).find('.fas').hasClass('fa-bars')){
                    $(this).find('.fas').removeClass('fa-bars').addClass('fa-times')
                    $('.header__menu').css({'transition':'left 0.5s'})
                    $('.header__menu').css({'left':'0px'})
                }
                else{
                    $(this).find('.fas').removeClass('fa-times').addClass('fa-bars')
                    $('.header__menu').css({'transition':'left 0.5s'})
                    $('.header__menu').css({'left':'-200px'})
                }
            });
        }
    });
});