$(document).ready(function(){
    $('.icon').on('click', function(){
        $(this).closest('#nav').toggleClass('menu-open');
        $('.links').toggleClass('active');
    });

    $("#nav").on("click","a", function (event) {
        let id = $(this).attr('href');
        if (!~id.indexOf("http")){
            event.preventDefault();
            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        }
    });     
});