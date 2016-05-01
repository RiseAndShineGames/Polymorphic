"use strict";

var timer, position, size, alpha;

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, context) {
        timer = game.entities.get(entity, "timers").flash_screen;
        if (!timer.running) {
            return;
        }
        position = game.entities.get(entity, "position");
        size = game.entities.get(entity, "size");
        alpha = (timer.max - timer.time) / timer.max;
        context.globalAlpha = alpha;
        context.fillStyle = "#e23d1f";
        context.fillRect(position.x, position.y, size.width, size.height);
        context.globalAlpha = 1;

    }, "camera");
};
