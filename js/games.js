$('.snake-button').on("click", function() {
  $('.snake-wrapper').html("");
  var snakeView = new Game.SnakeUI(45);
  $('.snake-button').hide();
  callback = function() {
    $('.snake-button').show();
  };
  snakeView.start(callback);
});
