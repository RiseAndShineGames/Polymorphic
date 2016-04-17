"use strict";

var timers;

module.exports = function(entity, game) {
    timers = game.entities.get(entity, "timers");
    timers.animate_name.running = true;
};
