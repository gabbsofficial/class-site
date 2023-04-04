$( ".draggable" ).draggable();

$(".friend-btn").click(function(){
    $(".friend1").css("opacity","1");
  });

  $(".hat-btn").click(function(){
    $(".hat1").toggleClass("show");
  });

  $(".dark-btn").click(function(){
    $(".star").toggleClass("dark");
    $(".star:before").toggleClass("dark");
    $(".star:after").toggleClass("dark");
    $("body").toggleClass("dark");
  });

  $(".light-btn").click(function(){
    $(".star").toggleClass("light");
    $(".star:before").toggleClass("light");
    $(".star:after").toggleClass("light");
    $("body").toggleClass("light");
  });

  $(".enlarge-btn").click(function(){
    $(".star").toggleClass("grow");
    $(".star:before").toggleClass("grow");
    $(".star:after").toggleClass("grow");
  });

  $(".shrink-btn").click(function(){
    $(".star").toggleClass("small");
    $(".star:before").toggleClass("small");
    $(".star:after").toggleClass("small");
  });

  $(".spin-btn").click(function(){
    $(".star").toggleClass("spin");
    $(".star:before").toggleClass("spin");
    $(".star:after").toggleClass("spin");
  });

  $(".ooh-btn").click(function(){
    $(".star").hide("explode", {pieces: 40}, 2000);
    $(".star:before").hide("explode", {pieces: 40}, 2000);
    $(".star:after").hide("explode", {pieces: 40}, 2000);
  });

  $(".ooh2-btn").click(function(){
    $(".star").show("explode", {pieces: 40}, 2000);
    $(".star:before").show("explode", {pieces: 40}, 2000);
    $(".star:after").show("explode", {pieces: 40}, 2000);
  });
