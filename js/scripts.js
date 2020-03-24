$(document).ready(function() {
  
  $(".clickable").click(function() {
    $(this).children("p").slideToggle();
  });

  $("button#meow").click(function() {
    $("ul#cat").after("<li>Meow!!</li>");
    $("ul#dog").after("<li>Woof!</li>");
    
    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#cat").prepend("<li>Goodbye!</li>");
    $("ul#dog").prepend("<li>Goodbye, dear user!</li>");
    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#woof").click(function() {
    $("ul#cat").append("<li>Meow!</li>");
    $("ul#dog").append("<li>Woof!</li>");
    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("#salad")

});