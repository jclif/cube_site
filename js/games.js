$('.snake-button').on("click", function() {
  $('.snake-button-wrapper').hide();
  callback = function() {
    $('.snake-button-wrapper').show();
  };

  var snakeView = new Game.SnakeUI(47);
  snakeView.start(callback);
});
