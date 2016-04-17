"use strict";

var oldType, newType, type, round, image, timers, camera = 0, indicator = 4;
module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	oldType = game.entities.get(indicator,"type");
	newType = Math.floor(Math.random() * 4) + 1;
	round = game.entities.get(camera,"round");
	image = game.entities.get(indicator,"image");
	timers = game.entities.get(camera, "timers");
	game.entities.set(indicator,"type", (oldType !== newType ? newType : (newType % 4) + 1));
	type = game.entities.get(indicator,"type");
	switch (round) {
		case 0:
			game.entities.set(indicator,"type",0);
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
	timers["change_indicator"].time = 0;
	timers["change_indicator"].running = true;
};
