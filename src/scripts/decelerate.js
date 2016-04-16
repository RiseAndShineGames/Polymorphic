"use strict";

var timers, velocity;

module.exports = function(entity, game) {

    velocity = game.entities.get(entity, "velocity");
    if (velocity.x > 0 && velocity.y > 0) {
        timers = game.entities.get(entity, "timers");
        timers.decelerate.time = 0;
        timers.decelerate.running = true;
    }
};
