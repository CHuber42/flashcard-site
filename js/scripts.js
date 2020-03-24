$(document).ready(function() {
  
  $(".clickable").click(function() {
    $(this).children("p").slideToggle();
  });

  $("button#hello").click(function() {
    $("ul").prepend("<li>Hello!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });

});