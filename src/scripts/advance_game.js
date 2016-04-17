"use strict";

var round, final_score, scores, roundScore;

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
        // TODO Use round based scoring instead. This is just for a final score
        final_score = 0;
        final_score += scores.round1;
        final_score += scores.round2;
        final_score += roundScore;
        game.switchScene("end", { "final_score": final_score });
	} else {
        ++round;
        game.switchScene("main", { "scores": scores,"round": round });
    }
};
