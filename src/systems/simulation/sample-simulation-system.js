"use strict";

var velocity, newVel, rotation, animation, timers;

function getVelocity(game, angle, speed) {
    return {
        "x": speed * Math.cos(angle),
        "y": speed * Math.sin(angle)
    };
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        velocity = game.entities.get(entity, "velocity");
        rotation = game.entities.get(entity, "rotation");
        animation = game.entities.get(entity, "animation");
        timers = game.entities.get(entity, "timers");
        if (game.inputs.button("go")) {
            newVel = getVelocity(game, rotation.angle, game.entities.get(entity, "speed"));
            game.entities.set(entity, "velocity", newVel);
            animation.speed = 1;
        } else {
            if (velocity.x != 0 && velocity.y != 0) {
                timers.decelerate.running = true;
            }
        }
        if (game.inputs.button("clockwise") && !game.inputs.button("counter_clockwise")) {
            rotation.angle += game.entities.get(entity, "angle_mod");
        } else if (game.inputs.button("counter_clockwise") && !game.inputs.button("clockwise")) {
            rotation.angle -= game.entities.get(entity, "angle_mod");
        }
    }, "player");
};
