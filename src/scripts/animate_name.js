"use strict";

var timers, pp, name = 3;

module.exports = function(entity, game) {

    pp = game.entities.get(name, "position");
    pp.y += game.entities.get(name, "speed");

    if (pp.y <= 0) {
        timers = game.entities.get(entity, "timers");
        timers.animate_name.time = 0;
        timers.animate_name.running = true;
    }
};
