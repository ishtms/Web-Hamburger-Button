var $screen = $(".screen");
var $call = $('.call');
var $callMenu = $('.call-menu');
var $callItems = $('.call-items');
var $notCall = $('body').not($('.call'));

$notCall.on('click', function(){
    $callItems.slideUp(300);
    $callMenu.find("i").removeClass("fa-times").addClass('fa-bars');
    $screen.hide();
});
$call.on("click", function(event){
    event.stopPropagation();
    $callItems.slideToggle(300);
    $callmenu.find("i").toggleClass("fa-bars fa-times");
    $screen.toggle();

})