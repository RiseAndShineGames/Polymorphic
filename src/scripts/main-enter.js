"use strict";
var scores, bounds, containerImage, playerPosition, playerSize, playerAnimation, heartAnimation, cameraPosition, camera = 0, container = 3, player = 1, heart = 6;
module.exports = function(game) { // eslint-disable-line no-unused-vars
    bounds = game.entities.get(container,"size");
    containerImage = game.entities.get(container, "image");
    game.scaleCanvasToFitRectangle(1280,960);
    playerPosition = game.entities.get(player,"position");
    playerSize = game.entities.get(player,"size");
    game.entities.set(player, "rotation", { "angle": -Math.PI * 0.5 });
    playerAnimation = game.entities.get(player, "animation");
    heartAnimation = game.entities.get(heart, "animation");
    cameraPosition = game.entities.get(camera,"position");
    scores = game.entities.get(camera,"scores");
    if (game.arguments["scores"]) {
        scores.round1 = game.arguments["scores"].round1;
        scores.round2 = game.arguments["scores"].round2;
        scores.round3 = game.arguments["scores"].round3;
    } else {
        scores.round1 = 0;
        scores.round2 = 0;
        scores.round3 = 0;
    }
    if (game.arguments.round > 1) {
        containerImage.name = "level_two.jpg";
        playerAnimation.name = "polywag";
        playerSize.width = 251;
        playerSize.height = 251;
        heartAnimation.name = "trump_heart";
    } else {
        playerAnimation.name = "swim";
        heartAnimation.name = "";
        playerSize.width = 130;
        playerSize.height = 130;
    }

    playerPosition.x = bounds.width / 2 - playerSize.width / 2;
    playerPosition.y = bounds.height / 2 - playerSize.height / 2;
    cameraPosition.x = bounds.width / 2 - game.canvas.width / 2;
    cameraPosition.y = bounds.height / 2 - game.canvas.height / 2;
    game.entities.set(camera,"round",game.arguments["round"] || 0);
};
