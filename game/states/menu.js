
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    // Add the background sprite
    this.background = this.game.add.sprite(0, 0, 'background');

    // Add the ground sprite as a Tile, and start scrolling in the negative
    this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
    this.ground.autoScroll(-200, 0);
  },
  update: function() {

  }
};

module.exports = Menu;
