import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function() {
        var stage = new createjs.Stage(this.$('#stage')[0]);

        //Draw the board for the game
        var board = new createjs.Shape();
        var graphics = board.graphics;
        graphics.beginFill('#ffffff');

        //Outer box
        graphics.drawRect(0, 0, 340, 2);
        graphics.drawRect(340, 0, 2, 300);
        graphics.drawRect(0, 0, 2, 300);
        graphics.drawRect(0, 300, 340, 2);

        board.x = 20;
        board.y = 40;
        
        stage.addChild(board);
        stage.update()
    }
});