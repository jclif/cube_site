(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  if (typeof(require) !== "undefined") {
    _ = require('./underscore.js');
  }

  var Game = Asteroids.Game = function (ctx, callback, background, asteroid, fire) {
    this.intervalID = 0;
    this.ctx = ctx;
    this.asteroids = this.addAsteroids(10, asteroid);
    this.bullets = [];
    this.callback = callback;
    this.background = background;
    this.ship = new Asteroids.Ship([400, 225], [0,0], fire);

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40, 65, 68, 83, 87].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
  };

  Game.prototype.bindKeyHandlers = function() {
    var that = this;

    key('s', function(){
      that.ship.power([0,0.3]);
      that.ship.drawPowerDown(that.ctx);
    });
    key('down', function(){
      that.ship.power([0,0.3]);
      that.ship.drawPowerDown(that.ctx);
    });
    key('w', function(){
      that.ship.power([0,-0.3]);
      that.ship.drawPowerUp(that.ctx);
    });
    key('up', function(){
      that.ship.power([0,-0.3]);
      that.ship.drawPowerUp(that.ctx);
    });
    key('d', function(){
      that.ship.power([0.3,0]);
      that.ship.drawPowerRight(that.ctx);
    });
    key('right', function(){
      that.ship.power([0.3,0]);
      that.ship.drawPowerRight(that.ctx);
    });
    key('a', function(){
      that.ship.power([-0.3,0]);
      that.ship.drawPowerLeft(that.tx);
    });
    key('left', function(){
      that.ship.power([-0.3,0]);
      that.ship.drawPowerLeft(that.ctx);
    });
    key('space', function(){
      that.fireBullet();
    });
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 450;

  Game.prototype.checkCollisions = function() {
    var that = this;

    this.asteroids.forEach(function(asteroid) {
      if (asteroid.isCollidedWith(that.ship)) {
        window.alert("You lost !!!");
        that.stop();
        that.callback();
      }
    });
  };

  Game.prototype.addAsteroids = function(numAsteroids, img){
    var asteroids = [];
    var that = this;

    _(numAsteroids).times(function() {
      asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y, img));
    });

    return asteroids;
  };

  Game.prototype.draw = function() {
    var that = this;

    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    that.ctx.drawImage(that.background, 0, 0);

    this.asteroids.forEach(function(asteroid){
      asteroid.draw(that.ctx);
    });

    this.bullets.forEach(function(bullet){
      bullet.draw(that.ctx);
    });

    this.ship.draw(this.ctx);
  };

  Game.prototype.move = function() {
    var that = this;

    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });

    this.bullets.forEach(function(bullet){
      bullet.move();
    });

    this.ship.move();
  };

  Game.prototype.step = function () {
    this.checkWinState();
    this.move();
    this.ship.slow();
    this.draw();
    this.checkCollisions();
    this.removeStragglers();
    this.checkBullets();
  };

  Game.prototype.checkWinState = function () {
    var that = this;

    if (that.asteroids.length === 0) {
      console.log("YOU WON!");
      that.stop();
      that.callback();
    }
  };

  Game.prototype.checkBullets = function () {
    var that = this;
    this.bullets.forEach(function(bullet) {
      bullet.hitAsteroids(that, that.asteroids);
    });
  };

  Game.prototype.removeStragglers = function () {

    this.asteroids.forEach(function(asteroid) {
      if (0 > asteroid.pos[0]) {
        asteroid.pos[0] = Game.DIM_X;
      } else if (Game.DIM_X < asteroid.pos[0]) {
        asteroid.pos[0] = 0;
      } else if (0 > asteroid.pos[1]) {
        asteroid.pos[1] = Game.DIM_Y;
      } else if (Game.DIM_Y < asteroid.pos[1]) {
        asteroid.pos[1] = 0;
      }
      });

    var newBulletsArray = [];

    this.bullets.forEach(function(bullet) {
      if ((0 < bullet.pos[0]) && (Game.DIM_X > bullet.pos[0]) && (0 < bullet.pos[1]) && (Game.DIM_Y > bullet.pos[1])) {
        newBulletsArray.push(bullet);
      }
    });

    this.bullets = newBulletsArray;

    if (!((0 < this.ship.pos[0]) && (Game.DIM_X > this.ship.pos[0]) && (0 < this.ship.pos[1]) && (Game.DIM_Y > this.ship.pos[1]))) {
      this.ship.pos = [Game.DIM_X / 2, Game.DIM_Y / 2];
      this.ship.vel = [0, 0];
    }
  };

  Game.prototype.start = function () {
    var that = this;

    this.bindKeyHandlers();
    this.intervalID = setInterval(function() {
      that.step();
    }, 30);
  };

  Game.prototype.stop = function () {
    clearInterval(this.intervalID);
  };

  Game.prototype.fireBullet = function () {
    var new_bullet = this.ship.fireBullet();
    if (typeof new_bullet != 'undefined') {
      this.bullets.push(new_bullet);
    }
  };

  Game.prototype.removeBullet = function(bullet) {
    this.bullets = _.without(this.bullets, bullet);
  };

  Game.prototype.removeAsteroid = function(asteroid) {
    this.asteroids = _.without(this.asteroids, asteroid);
  };

})(this);
