$('.show_btn').click(function(){
    $('.container div').fadeIn(500);
});

$('.hide_btn').click(function(){
    $('.container div').fadeOut(500);
});
$('.toggle_btn').click(function(){
    $('.container div').fadeToggle(500);
});