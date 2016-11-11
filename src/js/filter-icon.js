
$(function() { 
  if ($(window).width() < 699) {
    $(".filter--contrast").click(function(event) {
      $(".filter--contrast").toggleClass("active",500);
      $(".filter--fill").removeClass("active",500);
      $(".filter--crop").removeClass("active",500);
      $(".slider-3").toggle();
      $(".slider-2").hide();
      $(".slider-1").hide();
    });

    $(".filter--fill").click(function(event) {
      $(".filter--fill").toggleClass("active",500);
      $(".filter--contrast").removeClass("active",500);
      $(".filter--crop").removeClass("active",500);
      $(".slider-2").toggle();
      $(".slider-3").hide();
      $(".slider-1").hide();
    });

    $(".filter--crop").click(function(event) {
      $(".filter--crop").toggleClass("active",500);
      $(".filter--fill").removeClass("active",500);
      $(".filter--contrast").removeClass("active",500);
      $(".slider-1").toggle();
      $(".slider-2").hide();
      $(".slider-3").hide();
    })
  }
})