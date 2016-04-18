"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function() {
        if (game.inputs.button("home")) {
             game.switchScene("title");
        }
        if (game.inputs.button("play")) {
             game.switchScene("main");
        }
    },"camera");
};
