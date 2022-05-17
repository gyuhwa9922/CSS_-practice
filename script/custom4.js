$('.add_btn').click(function(){
    $('.container div').addClass('active');
});
$('.remove_btn').click(function(){
    $('.container div').removeClass('active');
});
$('.toggle_btn').click(function(){
    $('.container div').toggleClass('active');
});