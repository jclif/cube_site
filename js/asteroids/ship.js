(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function (pos, vel, fire, ship) {
    Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
    this.fire = fire;
    this.ship = ship;
  };

  Ship.COLOR = "green";
  Ship.RADIUS = 5;

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.draw = function (ctx) {
    var that = this;

    ctx.drawImage(that.ship, that.pos[0] - (Ship.RADIUS/2) - 17, that.pos[1] - (Ship.RADIUS/2)-5);
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.slow = function() {
    this.vel[0] *= 0.99;
    this.vel[1] *= 0.99;
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

  Ship.prototype.drawPowerUp = function(ctx) {
    var that = this;

    var rad = 180 * Math.PI / 180;

    ctx.save();
    ctx.translate(that.pos[0], that.pos[1]);
    ctx.rotate(rad);
    ctx.drawImage(that.fire, -(that.fire.width/2), (-(that.fire.height/2)-15));
    ctx.restore();
  };

  Ship.prototype.drawPowerDown = function(ctx) {
    var that = this;

    ctx.drawImage(that.fire, that.pos[0] -(2*Ship.RADIUS), that.pos[1] - (6*Ship.RADIUS));
  };

  Ship.prototype.drawPowerLeft = function(ctx) {
    var that = this;

    var rad = 90 * Math.PI / 180;

    ctx.save();
    ctx.translate(that.pos[0], that.pos[1]);
    ctx.rotate(rad);
    ctx.drawImage(that.fire, -(that.fire.width/2), (-(that.fire.height/2)-15));
    ctx.restore();
  };

  Ship.prototype.drawPowerRight = function(ctx) {
    var that = this;

    var rad = 270 * Math.PI / 180;

    ctx.save();
    ctx.translate(that.pos[0], that.pos[1]);
    ctx.rotate(rad);
    ctx.drawImage(that.fire, -(that.fire.width/2), (-(that.fire.height/2)-15));
    ctx.restore();
  };
})(this);
