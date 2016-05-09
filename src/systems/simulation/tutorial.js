"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        if (game.inputs.button("back")) {
            game.switchScene("title");
        }
    }, "background");
};
