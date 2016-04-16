"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var round = game.entities.get(0,"round");
	var scores = game.entities.get(0,"scores");
	var roundScore = game.entities.get(0,"round_score");

	if (round === 0) {
		scores.round1 = roundScore;
	}
	if (round === 1) {
		scores.round2 = roundScore;
	}
	if (round === 2) {
		scores.round3 = roundScore;
	}
	round += 1;
	game.switchScene("main", { "scores": scores,"round": round });
};
