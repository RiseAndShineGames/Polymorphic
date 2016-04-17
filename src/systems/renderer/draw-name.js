"use strict";

var pos, size, msg, msg_size;

module.exports = function(ecs, game) {
	ecs.addEach(function drawTimer(entity, context, elapsed) { // eslint-disable-line no-unused-vars
        pos = game.entities.get(entity, "position");
        size = game.entities.get(entity, "size");
        msg = game.entities.get(entity, "title");
		msg_size = context.measureText(msg);
        context.font = "80px 'Teko'";
		context.fillStyle = "#ffab31";
		context.strokeStyle = "#fff";
        context.lineWidth = 3;
        context.textBaseline = "middle";
        context.fillText(msg, pos.x + (size.width * 0.45) - msg_size.width, pos.y + size.height * 0.4);
        context.strokeText(msg, pos.x + (size.width * 0.45) - msg_size.width, pos.y + size.height * 0.4);
        msg = game.entities.get(entity, "subtitle");
		msg_size = context.measureText(msg);
        context.font = "55px 'Teko'";
        context.lineWidth = 2;
        context.fillText(msg, pos.x + (size.width * 0.7) - (msg_size.width * 0.5), pos.y + (size.height * 0.8));
        context.strokeText(msg, pos.x + (size.width * 0.7) - (msg_size.width * 0.5), pos.y + (size.height * 0.8));
    }, "frog_name");
};
