"use strict";
var timers, food, position, bounds, type,round, container = 3, camera = 0;
module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	timers = game.entities.get(entity,"timers");
	food = game.instantiatePrefab("food");
	position = game.entities.get(food,"position");
	bounds = game.entities.get(container,"size");
	round = game.entities.get(camera,"round");
	position.x =  Math.floor(Math.random() * (bounds.width - 1)) + 1;
	position.y =  Math.floor(Math.random() * (bounds.height - 1)) + 1;

	type =  Math.floor(Math.random() * 4);
	game.entities.set(food,"type",type);
	switch (round) {
		case 1:
			switch (type) {
				case 0:
					game.entities.set(food,"value", 1);
					break;
				case 1:
					game.entities.set(food,"value", 5);
					break;
				case 2:
					game.entities.set(food,"value", -10);
					break;
				case 3:
					game.entities.set(food,"value", -15);
					break;
			}
			break;
		case 2:
			switch (type) {
				case 0:
					game.entities.set(food,"value", 1);
					break;
				case 1:
					game.entities.set(food,"value", -5);
					break;
				case 2:
					game.entities.set(food,"value", 10);
					break;
				case 3:
					game.entities.set(food,"value", -15);
					break;
			}
			break;
		case 3:
			switch (type) {
				case 0:
					game.entities.set(food,"value", 1);
					break;
				case 1:
					game.entities.set(food,"value", -5);
					break;
				case 2:
					game.entities.set(food,"value", -10);
					break;
				case 3:
					game.entities.set(food,"value", 15);
					break;
			}
			break;
		default:
			game.entities.set(food,"type",0);
			game.entities.set(food,"value",1);
	}


	timers["spawn_food"].time = 0;
	timers["spawn_food"].running = true;
};
