//Animate the burger nav and add class to the nav container
$('.burder-nav').click(function(){
    $(this).toggleClass('open');
    $('.navigation').slideToggle();
});