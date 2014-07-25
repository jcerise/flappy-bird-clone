
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

    // Create a group to put the title assets in, so they can move as a whole
    this.titleGroup = this.game.add.group();

    // Add the title sprite, and add it to the title group
    this.title = this.game.add.sprite(0, 0, 'title');
    this.titleGroup.add(this.title);

    // Create the bird sprite and add it to the title group
    this.bird = this.game.add.sprite(200, 5, 'bird');
    this.titleGroup.add(this.bird);

    // Add and begin and animation on the bird
    this.bird.animations.add('flap');
    this.bird.animations.play('flap', 12, true);

    // Set the originating location of the group
    this.titleGroup.x = 30;
    this.titleGroup.y = 100;

    // Create an oscillating animation tween for the entire group
    this.game.add.tween(this.titleGroup).to({y:115}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  },
  update: function() {

  }
};

module.exports = Menu;
