"use strict";

var timers, velocity, friction, animation;

module.exports = function(entity, game) {

    velocity = game.entities.get(entity, "velocity");
    friction = game.entities.get(entity, "friction");
    animation = game.entities.get(entity, "animation");

    velocity.x *= friction.x;
    velocity.y *= friction.y;
    animation.speed *= 0.9;

    if (velocity.x != 0 && velocity.y != 0) {
        timers = game.entities.get(entity, "timers");
        timers.decelerate.time = 0;
        timers.decelerate.running = true;
    }

};
