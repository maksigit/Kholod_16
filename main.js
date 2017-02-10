// ===================================================================
$(document).ready(function () {

    $('.gamburger').click(function () {
        $('.bar .lists').slideToggle(500)
        $('.fa-bars').toggleClass('fa-sort-desc');

    });
    $(window).resize(function () {
        if ($(window).width()>500){
            $('.bar .lists').removeAttr('style')
        }
    })
});


// ================================================================
$('.item-up_1').on('click', function () {
    $('.item-up_1').toggleClass('fa-sort-desc');
    $('.item-up_1').toggleClass('backblue');
    $('.item-bottom_1').slideToggle('nety');
});
$('.item-up_2').on('click', function () {
    $('.item-up_2').toggleClass('fa-sort-desc');
    $('.item-up_2').toggleClass('backblue');
    $('.item-bottom_2').slideToggle('nety');
});
$('.item-up_3').on('click', function () {
    $('.item-up_3').toggleClass('fa-sort-desc');
    $('.item-up_3').toggleClass('backblue');
    $('.item-bottom_3').slideToggle('nety');
});

// ================================================================

$('.great, .clouse').on('click', function () {
    $('.okno-pop-up').slideToggle('nety');
    $('.blackish').toggleClass('nety');
});

// ================================================================

    $('.tab_item').not(":first").hide();
    $('.tab-backg').removeClass('tab-backg').eq($(this).index()).addClass('tab-backg');
    $('.wrapper .tab').click(function () {
        $('.wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.wrapper .tab').removeClass('tab-backg').eq($(this).index()).addClass('tab-backg');
        $('.tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

// ================================================================
$('.all').mouseenter(function(){
    $('.box').fadeIn("slow");
});
$('.all').mouseleave(function(){
    $('.box').fadeOut("slow");
});


