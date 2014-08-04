
  'use strict';

  var Bird = require('../prefabs/bird');
  var Ground = require('../prefabs/ground'); 

  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 500;

      // Add the background sprite
      this.background = this.game.add.sprite(0,0, 'background');

      // Create a new bird object
      this.bird = new Bird(this.game, 100, this.game.height / 2);
      this.game.add.existing(this.bird);

      //Create a new ground object
      this.ground = new Ground(this.game, 0, 400, 335, 112);
      this.game.add.existing(this.ground);
    },
    update: function() {
      this.game.physics.arcade.collide(this.bird, this.ground);
    },
  };
  
  module.exports = Play;