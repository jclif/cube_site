$( document ).ready(function() {
  // Initialize Games and variables to keep track of active game
  var asteroids = null;
  var minesweeper = null;
  var tictactoe = null;
  var towersofhanoi = null;
  var games = [snake, asteroids, minesweeper, tictactoe, towersofhanoi];
  var active = null;

  // Snake
  $('.snake-button').on("click", function() {
    var offset = $(".snake-wrapper").offset();
    $("html,body").animate({
      scrollTop: offset.top - 38
    });
    $('.snake-wrapper').html('');
    $('.snake-button-wrapper').hide();
    callback = function() {
      $('.snake-button-wrapper').show();
    };

    var snake = new Game.SnakeUI(44);
    snake.start(callback);
  });

  // Asteroids
  $('.asteroids-button').on("click", function() {
    var offset = $(".asteroids-wrapper").offset();
    $("html,body").animate({
      scrollTop: offset.top - 38
    });
    $('.asteroids-wrapper').html('');
    $('.asteroids-button-wrapper').hide();
    callback = function() {
      $('.asteroids-button-wrapper').show();
    };

    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", "800");
    canvas.setAttribute("height", "450");

    var $asteroidwrapper = $('.asteroids-wrapper');
    $asteroidwrapper.append(canvas);

    var background = new Image();
    background.src = '../img/space.png';

    var ctx = canvas.getContext("2d");

    new Asteroids.Game(ctx, callback, background).start();
  });
});
