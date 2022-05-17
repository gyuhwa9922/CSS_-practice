$('.menu li').mouseenter(function(){
    $(this).children('.sub_menu').stop().slideDown(500);
});

$('.menu li').mouseleave(function(){
    $(this).children('.sub_menu').stop().slideUp(500);
});