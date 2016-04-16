"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
	var scores = game.entities.get(0,"scores");
	if (game.arguments["rounds"]) {
		scores.round1 = game.arguments["rounds"].round1;
		scores.round2 = game.arguments["rounds"].round2;
		scores.round3 = game.arguments["rounds"].round3;
	} else {
		scores.round1 = 0;
		scores.round2 = 0;
		scores.round3 = 0;
	}

	game.entities.set(0,"round",game.arguments["round"] || 0);
	console.log(scores);
};
