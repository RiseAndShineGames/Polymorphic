"use strict";
var home, homeImage, homePos, play, playImage, playPos;

module.exports = function(game) { // eslint-disable-line no-unused-vars
    game.sounds.play("applause.mp3",true);
    game.scaleCanvasToFitRectangle(1280,960);


    home = game.instantiatePrefab("button");
    game.entities.set(home,"home",true);
    game.entities.remove(home,"matchCenterX");
    homeImage = game.entities.get(home,"image");
    homePos = game.entities.get(home,"match");
    homeImage.name = "HomeButton.png";
    homePos.id = 1;
    homePos.offsetY = 225;
    homePos.offsetX = 160;
    homePos.offsetZ = 1;

    play = game.instantiatePrefab("button");
    game.entities.set(play,"play",true);
    game.entities.remove(play,"matchCenterX");
    playImage = game.entities.get(play,"image");
    playPos = game.entities.get(play,"match");
    playImage.name = "PlayButton.png";
    playPos.id = 1;
    playPos.offsetY = 145;
    playPos.offsetX = 1000;
    playPos.offsetZ = 1;
};
