"use strict";

var final_score, name, sw, sp, shw, shp, nw, np, scene = 1, shadow = 2, frog_name = 3, frogs = require("../data/frogs.json");
var home, homeImage, homePos, credits, creditsImage, creditsPos, play, playImage, playPos;
var keys = [
    { "value": "50", "name": "king_frog" },
    { "value": "40", "name": "frog_cordileone" },
    { "value": "30", "name": "arthur" },
    { "value": "20", "name": "frog_topic" },
    { "value": "15", "name": "david" },
    { "value": "10", "name": "plain" },
    { "value": "5", "name": "lilly" },
    { "value": "0", "name": "skele" },
    { "value": "-5", "name": "bozo" },
    { "value": "-10", "name": "hobo" },
    { "value": "-15", "name": "donald" }
];

module.exports = function(game) { // eslint-disable-line no-unused-vars
    final_score = game.arguments.final_score || -20;
    game.scaleCanvasToFitRectangle(1280,960);

    game.sounds.play("drumroll.mp3");

    sw = game.entities.get(scene, "size").width;
    sp = game.entities.get(scene, "position");
    sp.x = game.canvas.width * 0.5 - sw * 0.5;

    shw = game.entities.get(shadow, "size").width;
    shp = game.entities.get(shadow, "position");
    shp.x = game.canvas.width * 0.5 - shw * 0.5;

    nw = game.entities.get(frog_name, "size").width;
    np = game.entities.get(frog_name, "position");
    np.x = game.canvas.width * 0.5 - nw * 0.5;

    if (final_score >= 25) {
        game.sounds.play("applause.mp3");
    } else if (final_score >= 5) {
        game.sounds.play("golfclap.mp3");
    } else {
        game.sounds.play("crickets.mp3");
    }

    for (var i = 0; i < keys.length; i++) {
        if (parseInt(keys[i].value, 10) <= final_score) {
            name = keys[i].name;
            break;
        }
        name = "donald";
    }

    game.entities.set(frog_name, "title", "You've become " + frogs[name].name);
    game.entities.set(frog_name, "subtitle", frogs[name].subtitle);
    game.entities.set(shadow, "won_frog", frogs[name].image);

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

    credits = game.instantiatePrefab("button");
    game.entities.set(credits,"credits",true);
    creditsImage = game.entities.get(credits,"image");
    creditsPos = game.entities.get(credits,"match");
    creditsImage.name = "CreditsButton.png";
    creditsPos.id = 1;
    creditsPos.offsetY = 755;
    creditsPos.offsetZ = 1;


};
