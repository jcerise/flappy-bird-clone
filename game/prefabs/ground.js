'use strict';

var Ground = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

  // Enable autoscroll
  this.autoScroll(-200, 0);

  // Enable physocs on the ground sprite
  this.game.physics.arcade.enableBody(this);

  // Allow the grounds body t be affected by gravity
  this.body.allowGravity = false;

  // Make the ground immovable
  this.body.immovable = true;
  
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Ground;
