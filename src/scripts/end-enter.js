"use strict";

var sw, sp, shw, shp, nw, np, scene = 1, shadow = 2, frog_name = 3, frogs = require("../data/frogs.json");

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

    game.entities.set(frog_name, "title", frogs["donald"].name);
    game.entities.set(frog_name, "subtitle", frogs["donald"].subtitle);
    game.entities.set(shadow, "won_frog", frogs["donald"].image);

};
