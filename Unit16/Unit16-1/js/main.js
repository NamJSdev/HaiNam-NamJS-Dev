$(document).ready(function(){
    //Click image show Modal
    $('.show-modal').hide();
    $(document).on('click','.image__items img',function(){
        var src = $(this).attr('src');
        var alt = $(this).attr('alt');
        $('.show-modal').show();
        $('.show-modal img').attr('src',src);
        $('.show-modal p').text(alt);
    });
    //Hide Modal | close modal
    $(document).on('click','.show-modal span',function(){
        $('.show-modal').hide();
    });
    $('.show-modal .show-container').click(function(e){
        e.stopImmediatePropagation();
    })
    $(document).on('click','.show-modal',function(){
        $(this).hide();
    });
    //SlideShow
    var slideIndex = null;
    var arraySrc = [];
    var arrayAlt = [];
    var slides = $('.image__items img');
    function pushArray(){
        slides.each(function(){
            var srcImg = $(this).attr('src');
            var altImg = $(this).attr('alt');
            arraySrc.push(srcImg);
            arrayAlt.push(altImg);
        });
    }
    function slideShow(n){
        pushArray();
        if(slideIndex < 0){
            slideIndex = slides.length - 1;
        }
        if(slideIndex > slides.length){
            slideIndex = 0;
        }
        $('.show-container img').attr('src',arraySrc[slideIndex]);
        $('.show-modal p').text(arrayAlt[slideIndex]);
    };
    $('.show-container button:nth-child(2)').click(function(){
        var srcLiveShow = $('.show-container img').attr('src');
        pushArray();
        slideIndex = jQuery.inArray(srcLiveShow, arraySrc);
        slideShow(slideIndex--);
    });
    $('.show-container button:nth-child(3)').click(function(){
        var srcLiveShow = $('.show-container img').attr('src');
        pushArray();
        slideIndex = jQuery.inArray(srcLiveShow, arraySrc);
        slideShow(slideIndex++);
    });
});