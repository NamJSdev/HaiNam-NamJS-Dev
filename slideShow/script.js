var slideIndex = 1;
setInterval(function(){
    slideIndex++;
    slideShow();
}, 5000);
function slideShow(){
    var slides = document.getElementsByClassName('slide');
    if(slideIndex<1){
        slideIndex = slides.length;
    }
    if(slideIndex>slides.length){
        slideIndex = 1;
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].classList.remove('slide__active');
    }
    slides[slideIndex-1].classList.add('slide__active');
    var dots = document.getElementsByClassName('dot');
    for(var i = 0; i < dots.length; i++){
        dots[i].classList.remove('dot__active');
    }
    dots[slideIndex-1].classList.add('dot__active');
}
var prev = document.getElementById('prev');
prev.addEventListener('click',function(){
    slideIndex--;
    slideShow();
});
var next = document.getElementById('next');
next.addEventListener('click',function(){
    slideIndex++;
    slideShow();
});
function dotActive(n){
    slideIndex = n;
    slideShow();
}