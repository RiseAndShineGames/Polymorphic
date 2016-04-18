"use strict";
var home, homeImage, homePos, play, playImage, playPos;

module.exports = function(game) { // eslint-disable-line no-unused-vars
    game.sounds.play("applause.mp3",true);
    game.scaleCanvasToFitRectangle(1280,960);


    home = game.instantiatePrefab("button");
    game.entities.set(home,"home",true);
    game.entities.remove(home,"matchCenterX");
    homeImage = game.entities.get(home,"image");
    homePos = game.entities.get(home,"position");
    homeImage.name = "HomeButton.png";
    homePos.y = 225;
    homePos.x = 160;

    play = game.instantiatePrefab("button");
    game.entities.set(play,"play",true);
    game.entities.remove(play,"matchCenterX");
    playImage = game.entities.get(play,"image");
    playPos = game.entities.get(play,"position");
    playImage.name = "PlayButton.png";
    playPos.y = 145;
    playPos.x = 1000;
};
