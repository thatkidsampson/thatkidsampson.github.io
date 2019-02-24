$(document).ready(function(){
    $("#burger_container").on("click", function(){
        $(this).toggleClass("open");
        $("#menu").toggleClass("open");
    });
    $("#menu li").hover(function(){
        $(this).toggleClass("on");
    });
    
});