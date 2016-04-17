"use strict";
var timers, food, position, bounds, type,round, image, size, container = 3, camera = 0;
module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.set(camera,"numOfFood",game.entities.get(camera,"numOfFood") + 1);
	timers = game.entities.get(entity,"timers");
	food = game.instantiatePrefab("food");
	position = game.entities.get(food,"position");
	size = game.entities.get(food,"size");
	bounds = game.entities.get(container,"size");
	round = game.entities.get(camera,"round");
	image = game.entities.get(food,"image");
	position.x =  Math.floor(Math.random() * ((bounds.width - size.width) - 1)) + 1;
	position.y =  Math.floor(Math.random() * ((bounds.height - size.height) - 1)) + 1;

	type =  Math.floor(Math.random() * 4) + 1;
	game.entities.set(food,"type",type);
	switch (round) {
		case 0:
			game.entities.set(food,"type",0);
			break;
		default:
			switch (type) {
				case 1:
					image.name = "YellowFood.png";
					break;
				case 2:
					image.name = "GreenFood.png";
					break;
				case 3:
					image.name = "BlueFood.png";
					break;
				case 4:
					image.name = "RedFood.png";
					break;
			}
	}
	if (game.entities.get(camera,"numOfFood") >= 12) {
		timers["spawn_food"].max = 1500;
	}
	timers["spawn_food"].time = 0;
	timers["spawn_food"].running = true;
};
