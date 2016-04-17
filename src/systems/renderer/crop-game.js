"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var viewportPosition = game.entities.get(entity, "position");
		var viewportSize = game.entities.get(entity, "size");

		var cameraPosition = game.entities.get(0, "position");
		var cameraSize = game.entities.get(0, "size");

		context.fillStyle = "black";
		//top
		context.fillRect(
			cameraPosition.x,
			cameraPosition.y,
			cameraSize.width,
			viewportPosition.y - cameraPosition.y + 2
		);
		//right
		context.fillRect(
			viewportPosition.x + viewportSize.width - 2,
			cameraPosition.y,
			(cameraPosition.x + cameraSize.width) - (viewportPosition.x + viewportSize.width),
			cameraSize.height
		);
		//bottom
		context.fillRect(
			cameraPosition.x,
			viewportPosition.y + viewportSize.height - 2,
			cameraSize.width,
			(cameraPosition.y + cameraSize.height) - (viewportPosition.y + viewportSize.height)
		);
		//left
		context.fillRect(
			cameraPosition.x,
			cameraPosition.y,
			viewportPosition.x - cameraPosition.x + 2,
			cameraSize.height
		);

	}, "viewPort");
};
