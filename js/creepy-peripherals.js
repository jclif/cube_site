$(document).ready(function() {
  $(window).on("scroll", function() {
    var rate = 2;
    var distFromTop = 30;
    $('.me').css("top", -(($(document).scrollTop() / rate) - distFromTop));
  });

  $(window).on("scroll", function() {
    var rate = 3;
    var distFromBottom = 0;
    $('.icon-wrapper').css("bottom", -(($(document).scrollTop() / rate) - distFromBottom));
  });

});
