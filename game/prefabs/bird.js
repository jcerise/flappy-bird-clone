'use strict';

var Bird = function(game, x, y, frame) {
  // The super call to Phaser.Sprite
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  // Set the sprites anchor to the center

  // Add and play animations
  this.animations.add('flap');
  this.animations.play('flap', 12, true);

  // Add a physics body to the bird
  this.game.physics.arcade.enableBody(this);
  
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Bird;
