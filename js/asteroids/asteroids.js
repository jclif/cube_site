(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel, img) {
    Asteroids.MovingObject.call(this, pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
    this.img = img;
  };

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 31;

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY, img) {
    var randX = Math.random() * dimX;
    var randY = Math.random() * dimY;

    var max = Asteroids.MovingObject.MAX_1D_VEL;
    var min = -Asteroids.MovingObject.MAX_1D_VEL;
    var dx = Math.random() * (max - min) + min;
    var dy = Math.random() * (max - min) + min;

    return new Asteroid([randX, randY], [dx, dy], img);
  };

  Asteroid.prototype.draw = function (ctx) {
    var that = this;

    ctx.drawImage(that.img, that.pos[0] - (Asteroid.RADIUS/2), that.pos[1] - (Asteroid.RADIUS/2));
  };

})(this);
