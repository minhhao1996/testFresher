$(document).ready(function(){
    var number = 0;
    $("#menu").on('click', function() { 
        number ++;
    
          if(number%2 !=0){
            $( "#menu-mobile" ).slideDown(500);
            $(".bars p").text('CLOSE');
          }else{
            $( "#menu-mobile" ).slideUp(400);
            $(".bars p").text('MENU');
          }      
    });

    $(window).bind("scroll", function() {
        var btop = $(window).scrollTop();
        if (btop > 250) {
            $( "#menu-mobile" ).slideUp(900);
            $(".bars p").text('MENU');
       } 
    });
 
});