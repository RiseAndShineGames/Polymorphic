"use strict";

var velocity, rotation;

function getVelocity(game, angle, speed) {
    return {
        "x": speed * Math.cos(angle),
        "y": speed * Math.sin(angle)
    };
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        rotation = game.entities.get(entity, "rotation");
        if (game.inputs.button("go")) {
            velocity = getVelocity(game, rotation.angle, game.entities.get(entity, "speed"));
            game.entities.set(entity, "velocity", velocity);
        } else {
            game.entities.set(entity, "velocity", { "x": 0, "y": 0 });
        }
        if (game.inputs.button("clockwise") && !game.inputs.button("counter_clockwise")) {
            rotation.angle += game.entities.get(entity, "angle_mod");
        } else if (game.inputs.button("counter_clockwise") && !game.inputs.button("clockwise")) {
            rotation.angle -= game.entities.get(entity, "angle_mod");
        }
    }, "player");
};
