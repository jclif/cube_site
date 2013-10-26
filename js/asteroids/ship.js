(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
  };

  Ship.COLOR = "white";
  Ship.RADIUS = 3;

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.slow = function() {
    this.vel[0] *= 0.95;
    this.vel[1] *= 0.95;
  };


  Ship.prototype.fireBullet = function() {
    var scalar = 3;
    var velX = scalar * this.vel[0];
    var velY = scalar * this.vel[1];
    var bulletVel = [velX, velY];

    if (this.vel[0] === 0 && this.vel[1] === 0) {
      return;
    } else {
      var bulletPos = [this.pos[0], this.pos[1]];
      bullet = new Asteroids.Bullet(bulletPos, bulletVel);

      return bullet;
    }
  };

})(this);
