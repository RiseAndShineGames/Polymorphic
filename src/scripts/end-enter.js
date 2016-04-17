"use strict";

var final_score, name, sw, sp, shw, shp, nw, np, scene = 1, shadow = 2, frog_name = 3, frogs = require("../data/frogs.json");
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

};
