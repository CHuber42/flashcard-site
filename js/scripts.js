$(document).ready(function() {
  
  $(".clickable").click(function() {
    $(this).children("p").slideToggle();
  });


});