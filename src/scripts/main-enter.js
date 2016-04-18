"use strict";
var scores, bounds, containerImage, controlImage, controlTimers, indicatorImage, playerPosition, playerSize, playerAnimation, timers, heartAnimation, cameraPosition, camera = 0, container = 3, indicator = 4, player = 1, heart = 6, controls = 9;
module.exports = function(game) { // eslint-disable-line no-unused-vars
    game.sounds.play("polymorphic_game_loop.mp3",true);
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
    indicatorImage = game.entities.get(indicator,"image");
    timers = game.entities.get(camera, "timers");

    controlImage = game.entities.get(controls,"image");
    controlTimers = game.entities.get(controls, "timers");

    if (game.arguments["round"]) {
        timers["end_level"].max = 60000;
        var num =  Math.floor(Math.random() * 4) + 1;
        game.entities.set(indicator,"type",num);
        switch (num) {
            case 1:
                indicatorImage.name = "YellowFood.png";
                break;
            case 2:
                indicatorImage.name = "GreenFood.png";
                break;
            case 3:
                indicatorImage.name = "BlueFood.png";
                break;
            case 4:
                indicatorImage.name = "RedFood.png";
                break;
        }
    }
    if (game.arguments["scores"]) {
        scores.round1 = game.arguments["scores"].round1;
        scores.round2 = game.arguments["scores"].round2;
        scores.round3 = game.arguments["scores"].round3;
        console.log(game.arguments["scores"]);
    } else {
        scores.round1 = 0;
        scores.round2 = 0;
        scores.round3 = 0;
    }

    if (game.arguments.round > 1) {
        containerImage.name = "GameBG.jpg";
        playerAnimation.name = "polywag";
        playerSize.width = 251;
        playerSize.height = 251;
        heartAnimation.name = "silver_heart";
        controlImage.alpha = 0;
        controlTimers.pulse.running = false;
    } else if (game.arguments.round > 0) {
        playerAnimation.name = "midpoint";
        controlImage.alpha = 0;
        controlTimers.pulse.running = false;
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
