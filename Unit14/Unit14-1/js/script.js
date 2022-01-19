$(document).ready(function() {
    //Remove todo list
    $(document).on('click','.close',function(){
        $(this).parent().remove();
    });
    //Check todo list
    $(document).on('click','.content__list li',function(){
        $(this).toggleClass('checked');
    }); 
    //Add todo list click
    $('.header__input input:last-child').on('click',function(){
        var contentVal = $('.header__input input:first-child').val();
        if(contentVal == ''){
            alert('Bạn chưa nhập ghi chú!');
        }
        else if(contentVal.length > 500){
            alert('Giới hạn nhập vào không quá 500 ký tự!');
        }
        else{
            var lists = $('.content__list');
            lists.prepend('<li><i class="check-list check-list-on fas fa-check"></i>'+ contentVal +'<span class="close">x</span></li>');
            $('.header__input input:first-child').val(null);
        }
    });
    //Add todo list enter keyboard
    $('.header__input input:first-child').bind("enterKey",function(e){
        var contentVal = $('.header__input input:first-child').val();
        if(contentVal == ''){
            alert('Bạn chưa nhập ghi chú!');
        }
        else{
            var lists = $('.content__list');
            lists.prepend('<li><i class="check-list check-list-on fas fa-check"></i>'+ contentVal +'<span class="close">x</span></li>');
            $('.header__input input:first-child').val(null);
        }
    });
    $('.header__input input:first-child').keyup(function(e){
        if(e.keyCode == 13){
            $(this).trigger("enterKey");
        }
    });
});