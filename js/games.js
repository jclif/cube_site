$( document ).ready(function() {
  // Initialize Games and variables to keep track of active game
  var asteroids = null;
  var minesweeper = null;
  var tictactoe = null;
  var towersofhanoi = null;
  var games = [snake, asteroids, minesweeper, tictactoe, towersofhanoi];
  var active = null;

  $('.snake-button').on("click", function() {
    var offset = $(".snake-wrapper").offset();
    $("html,body").animate({
      scrollTop: offset.top - 45
    });
    $('.snake-wrapper').html('');
    $('.snake-button-wrapper').hide();
    callback = function() {
      $('.snake-button-wrapper').show();
    };

    var snake = new Game.SnakeUI(43);
    snake.start(callback);
  });
});
