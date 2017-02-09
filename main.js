
    // $('.menu-icon').on('click', function () {
    //     $('bar-1').toggle();
    // });


// ===============================PROBA=================================
$(document).ready(function () {

    $('.gamburger').click(function () {
        $('.bar .lists').slideToggle(500)
    });
    $(window).resize(function () {
        if ($(window).width()>500){
            $('.bar .lists').removeAttr('style')
        }
    })
});


// ================================================================
$('.sulka_1').on('click', function () {
    $('.item-up_1').toggleClass('fa-sort-desc');
    $('.item-up_1').toggleClass('backblue');
    $('.item-bottom_1').slideToggle('nety');
});
$('.sulka_2').on('click', function () {
    $('.item-up_2').toggleClass('fa-sort-desc');
    $('.item-up_2').toggleClass('backblue');
    $('.item-bottom_2').slideToggle('nety');
});
$('.sulka_3').on('click', function () {
    $('.item-up_3').toggleClass('fa-sort-desc');
    $('.item-up_3').toggleClass('backblue');
    $('.item-bottom_3').slideToggle('nety');
});

// ================================================================

$('.great, .clouse a').on('click', function () {
    $('.okno-pop-up').slideToggle('nety');
    $('.blackish').toggleClass('nety');
});

// ================================================================

$('.third_1').on('click', function () {
    $('.third-our_1').toggleClass('nety');
});
$('.third_2').on('click', function () {
    $('.third-our_2').toggleClass('nety');
});
$('.third_3').on('click', function () {
    $('.third-our_3').toggleClass('nety');
});

// ================================================================
$('.all').mouseenter(function(){
    $('.box').fadeIn("slow");
});
$('.all').mouseleave(function(){
    $('.box').fadeOut("slow");
});


