$(document).ready(function() {
  
  $(".clickable").click(function() {
    $(this).children("p").slideToggle();
  });

  $("button#hello").click(function() {
    $("ul#user").after("<li>Hello!</li>");
    $("ul#webpage").after("<li>Why hello there!</li>");
    
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").before("<li>Goodbye!</li>");
    $("ul#webpage").before("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").append("<li>Stop copying me!</li>");
    $("ul#webpage").append("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#salad")

});