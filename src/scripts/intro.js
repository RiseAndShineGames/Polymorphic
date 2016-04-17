"use strict";

var timers, pp, ph;

module.exports = function(entity, game) {

    ph = game.entities.get(entity, "size").height;
    pp = game.entities.get(entity, "position");
    pp.y -= game.entities.get(entity, "speed");

    if (pp.y > -ph) {
        timers = game.entities.get(entity, "timers");
        timers.intro.time = 0;
        timers.intro.running = true;
    } else {
        game.switchScene("main");
    }

};
