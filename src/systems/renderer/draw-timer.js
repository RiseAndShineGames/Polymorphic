"use strict";

var pos, size, msg, msg_size, timer, camera = 0;

module.exports = function(ecs, game) {
	ecs.addEach(function drawTimer(entity, context, elapsed) { // eslint-disable-line no-unused-vars
        pos = game.entities.get(entity, "position");
        size = game.entities.get(entity, "size");
        timer = game.entities.get(camera, "timers").end_level;
        msg = Math.ceil((timer.max - timer.time) / 1000);
		msg_size = context.measureText(msg);
		context.font = "120px 'Teko'";
		context.fillStyle = "#ffab31";
		context.strokeStyle = "#fff";
        context.lineWidth = 5;
        context.textBaseline = "middle";
        context.fillText(msg, pos.x + (size.width * 0.3) - (msg_size.width * 0.5), pos.y + size.height * 0.5);
        context.strokeText(msg, pos.x + (size.width * 0.3) - (msg_size.width * 0.5), pos.y + size.height * 0.5);
    }, "timer");
};
