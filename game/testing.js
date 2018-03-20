/*global Phaser*/

var game = new Phaser.Game(screen.availWidth, screen.availHeight, Phaser.AUTO, '');
var game_state = {};

game_state.main = function() {};
game_state.main.prototype = {

    preload: function() {

    },

    create: function() {

    },

    update: function() {

    },

};
game.state.add('main', game_state.main);
game.state.start('main');
