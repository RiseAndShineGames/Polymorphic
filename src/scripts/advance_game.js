"use strict";

var round, scores, roundScore;

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	round = game.entities.get(0,"round");
	scores = game.entities.get(0,"scores");
	roundScore = game.entities.get(0,"round_score");

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
