$('.show_btn').click(function(){
    $('.container div').slideDown(500);
});

$('.hide_btn').click(function(){
    $('.container div').slideUp(500);
});
$('.toggle_btn').click(function(){
    $('.container div').slideToggle(500);
});