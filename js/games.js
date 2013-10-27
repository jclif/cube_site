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

    var offset = $(".asteroids-wrapper").offset();
    $("html,body").animate({
      scrollTop: offset.top - 80
    });

    $('.asteroids-wrapper').html('');
    $('.asteroids-button-wrapper').hide();

    audio = '<audio id="asteroids-audio" src="http://api.soundcloud.com/tracks/115712957/stream?client_id=611bb0eab5e68dfbe36d8e732db14d74"></audio>';
    $('.asteroids-info').prepend(audio);

    callback = function() {
      $('.asteroids-button-wrapper').show();
      $('#asteroids-audio').remove();
      $('.soundcloud').stop();
      $('.soundcloud').css("opacity", "1");
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

    setTimeout(function () {
      $('#asteroids-audio')[0].currentTime=0;
      $('#asteroids-audio')[0].play();
      $('.soundcloud').pulsate();
    }, 1000);
  });

  // Hanoi
  var hanoi = new Hanoi.Game(5);
  hanoi.run();

  // Tic Tac Toe
  var tictactoe = new TTT.Game();
  tictactoe.run();
});
