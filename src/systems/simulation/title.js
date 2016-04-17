"use strict";

var pt, player = 2;

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        if (game.inputs.button("start") || game.inputs.button("go")) {
            pt = game.entities.get(player, "timers");
            pt.intro.running = true;
        }
    }, "background");
};
