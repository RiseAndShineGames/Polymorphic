"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars

    game.scaleCanvasToFitRectangle(1280,960);
    var scores = game.entities.get(0,"scores");
    console.log(game.arguments);
    if (game.arguments["scores"]) {
        scores.round1 = game.arguments["scores"].round1;
        scores.round2 = game.arguments["scores"].round2;
        scores.round3 = game.arguments["scores"].round3;
    } else {
        scores.round1 = 0;
        scores.round2 = 0;
        scores.round3 = 0;
    }

    game.entities.set(0,"round",game.arguments["round"] || 0);
    console.log(scores);
};
