/*global Phaser*/

var game = new Phaser.Game(screen.availWidth, screen.availHeight, Phaser.AUTO, '');
var game_state = {};

game_state.main = function() {};
game_state.main = {

    preload: function() {
        game.stage.backgroundColor = '#333333';
    },

    create: function() {
       var test = game.add.text(32, 32, "testing", {
           font: 'bold 30px monospace',
           fill: '#ffffff'
       });
    },

    update: function() {

    },

};
game.state.add('main', game_state.main);
game.state.start('main');
