"use strict";

var timers,image, ticks = 0.00;

module.exports = function(entity, game) {
    ticks += .03;
    image = game.entities.get(entity,"image");
    image.alpha = 0.85 * (Math.sin(ticks) + 1) / 2 + .15;

    timers = game.entities.get(entity, "timers");
    timers.pulse.time = 0;
    timers.pulse.running = true;

};
