"use strict";
var timers;

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity) {
        timers = game.entities.get(entity, "timers");
        if (!timers.show_name.running && !timers.animate_name.running) {
            if (game.inputs.button("home")) {
                 game.switchScene("title");
            }
            if (game.inputs.button("credits")) {
                 game.switchScene("credits");
            }
            if (game.inputs.button("play")) {
                 game.switchScene("main");
            }
        }
    },"camera");
};
