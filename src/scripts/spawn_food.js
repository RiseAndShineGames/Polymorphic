"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var timers = game.entities.get(entity,"timers");
	var food = game.instantiatePrefab("food");
	var position = game.entities.get(food,"position");
	position.x =  Math.floor(Math.random() * (game.canvas.width - 1)) + 1;
	position.y =  Math.floor(Math.random() * (game.canvas.height - 1)) + 1;

	timers["spawn_food"].time = 0;
	timers["spawn_food"].running = true;
};
