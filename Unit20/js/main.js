function countdown(){
    var future = Date.parse('1 Feb 2023 00:00:00');
    var now = new Date();
    var diff = future - now;
    // Tính ngày
    var days = Math.floor(diff/(24*60*60*1000));
    var hours = Math.floor(diff/(60*60*1000));
    var minutes = Math.floor(diff/(60*1000));
    var seconds = Math.floor(diff/(1000));
    // Quy đổi hệ chuẩn
    var d = days;
    var h = hours%24;
    var m = minutes%60;
    var s = seconds%60;
    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
}
setInterval(function(){
    countdown()
},1000)
// Back-to-top
$('.back-to-top').hide();
$('.back-to-top').click(function () {
    $("html, body").animate({scrollTop: 0}, 500);
 });
$(window).on('scroll',function(){
    if($(this).scrollTop() > 100){
        $('.back-to-top').fadeIn();
    }else{
        $('.back-to-top').fadeOut();
    };

});
$('.slide-product').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
})
// menu_phone
$(document).on('click','.menu__phone',function(){
    if($(this).find('.fas').hasClass('fa-bars')){
        $(this).find('.fas').removeClass('fa-bars').addClass('fa-times')
        $('.menu-nav').css({'transition':'left 0.5s'})
        $('.menu-nav').css({'left':'0px'})
    }
    else{
        $(this).find('.fas').removeClass('fa-times').addClass('fa-bars')
        $('menu-nav').css({'transition':'left 0.5s'})
        $('.menu-nav').css({'left':'-400px'})
    }
});
// Accordion
$('.accordion__content').hide();
$(document).on('click','.accordion-click',function(){
    $('.accordion__content').slideUp();
    if($(this).find('.fas').hasClass('fa-plus')){
        $('.accordion-click .fas').removeClass('fa-minus').addClass('fa-plus');
        $(this).find('.fas').removeClass('fa-plus').addClass('fa-minus');
        $(this).siblings('.accordion__content').slideDown();
    }
    else{
        $(this).find('.fas').removeClass('fa-minus').addClass('fa-plus');
    }
});