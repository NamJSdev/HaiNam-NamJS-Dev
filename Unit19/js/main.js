// $(document).ready(function(){
//     var index = 0;
//     var interval;
//     var endSlide = $('.solution__slides .slide:last').attr('adx');
//     var timer = function(){
//         interval = setInterval(function(){
//             slideValidate();
//         },5000);
//     }
//     function slideShow(index){
//         $('.solution__slides .slide').hide();
//         $('.solution__slides .slide').eq(index).fadeIn(500);
//         $('.dot__container .dot').removeClass('dot__active');
//         $('.dot__container .dot').eq(index).addClass('dot__active');
//         clearInterval(interval)
//         timer();
//     };
//     slideShow(index);
//     function slideValidate(){
//         if(++index > endSlide){
//             index = 0;
//         }
//         slideShow(index);
//     };
// });
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