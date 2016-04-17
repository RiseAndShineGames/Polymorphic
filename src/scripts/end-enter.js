"use strict";

var name, sw, sp, shw, shp, nw, np, scene = 1, shadow = 2, frog_name = 3, frogs = require("../data/frogs.json");
var keys = [
    { "value": "30", "name": "king_frog" },
    { "value": "25", "name": "frog_cordileone" },
    { "value": "20", "name": "arthur" },
    { "value": "15", "name": "frog_topic" },
    { "value": "10", "name": "david" },
    { "value": "5", "name": "plain" },
    { "value": "3", "name": "lilly" },
    { "value": "0", "name": "skele" },
    { "value": "-5", "name": "bozo" },
    { "value": "-10", "name": "hobo" },
    { "value": "-15", "name": "donald" }
];

module.exports = function(game) { // eslint-disable-line no-unused-vars
    game.scaleCanvasToFitRectangle(1280,960);

    sw = game.entities.get(scene, "size").width;
    sp = game.entities.get(scene, "position");
    sp.x = game.canvas.width * 0.5 - sw * 0.5;

    shw = game.entities.get(shadow, "size").width;
    shp = game.entities.get(shadow, "position");
    shp.x = game.canvas.width * 0.5 - shw * 0.5;

    nw = game.entities.get(frog_name, "size").width;
    np = game.entities.get(frog_name, "position");
    np.x = game.canvas.width * 0.5 - nw * 0.5;

    for (var i = 0; i < keys.length; i++) {
        if (parseInt(keys[i].value, 10) < game.arguments.final_score) {
            name = keys[i].name;
            break;
        }
    }

    game.entities.set(frog_name, "title", "You've become " + frogs[name].name);
    game.entities.set(frog_name, "subtitle", frogs[name].subtitle);
    game.entities.set(shadow, "won_frog", frogs[name].image);

};
