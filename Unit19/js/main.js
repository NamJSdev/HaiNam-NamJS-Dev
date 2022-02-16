// Slider-1
var slideIndex = 1;
setInterval(function(){
    slideIndex++;
    slideShow();
}, 4000);
function slideShow(){
    var slides = document.getElementsByClassName('slide');
    if(slideIndex<1){
        slideIndex = slides.length;
    }
    if(slideIndex>slides.length){
        slideIndex = 1;
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[slideIndex-1].classList.add('active');
    var dots = document.getElementsByClassName('dot');
    for(var i = 0; i < dots.length; i++){
        dots[i].classList.remove('dot__active');
    }
    dots[slideIndex-1].classList.add('dot__active');
}
// Slider-2
var slideIndex2 = 1;
setInterval(function(){
    slideIndex2++;
    slideShow2();
}, 5000);
function slideShow2(){
    var slides2 = document.getElementsByClassName('slide2');
    if(slideIndex2<1){
        slideIndex2 = slides2.length;
    }
    if(slideIndex2>slides2.length){
        slideIndex2 = 1;
    }
    for(var i = 0; i < slides2.length; i++){
        slides2[i].classList.remove('active');
    }
    slides2[slideIndex2-1].classList.add('active');
    var dots2 = document.getElementsByClassName('dot2');
    for(var i = 0; i < dots2.length; i++){
        dots2[i].classList.remove('dot__active');
    }
    dots2[slideIndex2-1].classList.add('dot__active');
}
function activeDot(n){
	slideIndex2=n;
	slideShow2();
}
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
// Accordion
$('.accordion__content').hide();
$(document).on('click','.accordion li',function(){
    $('.accordion__content').slideUp();
    if($(this).find('.fas').hasClass('fa-plus')){
        $('.accordion .fas').removeClass('fa-minus').addClass('fa-plus');
        $(this).find('.fas').removeClass('fa-plus').addClass('fa-minus');
        $(this).find('.accordion__content').slideDown();
    }
    else{
        $(this).find('.fas').removeClass('fa-minus').addClass('fa-plus');
    }
});
// On Map
$(document).on('click','.footer__map > button',function(){
    $(this).hide();
    $('.footer__map > div').fadeOut();
});
//Mail Validate

//validate email checking
var btnSubmitForm = document.getElementById('btn-send');
    btnSubmitForm.addEventListener('click',function(e){
    if(validate() == false){
        e.preventDefault();
    }
    else{
        alert('Submit thành công!')
    }
})
function validate(){
    var flagValidate = true;
    //Mail Validate
    var mailValidate = document.getElementById('mail');
    if(mailValidate.value == ''){
        flagValidate = false;
        alert('Không được để trống email')
    }
    else{
        if(validateEmail(mailValidate.value) == false){
            flagValidate = false;
            alert('Emai nhập sai định dạng!')
        }
        else{
            flagValidate = true;
            mailValidate.value = '';
        }
    }
    return flagValidate;
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// menu_phone
$(document).on('click','.menu__phone',function(){
    if($(this).find('.fas').hasClass('fa-bars')){
        $(this).find('.fas').removeClass('fa-bars').addClass('fa-times')
        $('.nav__menu__res').css({'transition':'left 0.5s'})
        $('.nav__menu__res').css({'left':'0px'})
    }
    else{
        $(this).find('.fas').removeClass('fa-times').addClass('fa-bars')
        $('.nav__menu__res').css({'transition':'left 0.5s'})
        $('.nav__menu__res').css({'left':'-400px'})
    }
});