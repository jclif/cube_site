$( document ).ready(function() {
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
    active = snake;
    snake.start(callback);
    console.log(active);
  });

  // Asteroids
  $('.asteroids-button').on("click", function() {
    $('#asteroids-audio')[0].currentTime=0;
    $('#asteroids-audio')[0].play();
    var offset = $(".asteroids-wrapper").offset();
    $("html,body").animate({
      scrollTop: offset.top - 38
    });
    $('.asteroids-wrapper').html('');
    $('.asteroids-button-wrapper').hide();
    callback = function() {
      $('.asteroids-button-wrapper').show();
      $('#asteroids-audio')[0].pause();
    };

    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", "800");
    canvas.setAttribute("height", "450");

    var $asteroidwrapper = $('.asteroids-wrapper');
    $asteroidwrapper.append(canvas);

    var background = new Image();
    background.src = '../img/space.png';

    var asteroid = new Image();
    asteroid.src = '../img/asteroid.png';

    var fire = new Image();
    fire.src = '../img/fire.png';

    var ctx = canvas.getContext("2d");
    var asteroids = new Asteroids.Game(ctx, callback, background, asteroid, fire);
    active = asteroids;
    asteroids.start();
  });

  // Hanoi
  var hanoi = new Hanoi.Game(5);
  hanoi.run();

  // Tic Tac Toe
  var tictactoe = new TTT.Game();
  tictactoe.run();
});
