$('.snake-button').on("click", function() {
  $('.snake-wrapper').html("");
  var view = new Game.SnakeUI(30);
  view.start();
});
