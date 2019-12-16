$(document).ready(function () {
    $('button#closed').click(function () {
        $(this).parents(".modal-li").removeClass('active');
        $('span.text').removeClass('active');
    });
    
    
    $('span.text').click(function() {
        let liData = $(this).data('li');
        let answer = $('.modal-li[data-li="' + liData + '"]');
        $('span.text').removeClass('active');

        
        $('.modal-li.active').removeClass('active');
        answer.addClass('active');
        $(this).addClass('active');
    });

    // mask input

    jQuery(function($){
        $("#tel").mask("+7 (999) 999-99-99");
        $("#tel2").mask("+7 (999) 999-99-99");
        $("#tel3").mask("+7 (999) 999-99-99");


     });
    
   
    
});
    
 