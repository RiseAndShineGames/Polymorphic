"use strict";

var sw, sp, fp, fw, tp, scene = 1, fish = 2, tut = 5;

module.exports = function(game) { // eslint-disable-line no-unused-vars
    game.sounds.play("polymorphic_intro_music.mp3",true);
    game.scaleCanvasToFitRectangle(1280,960);

    sw = game.entities.get(scene, "size").width;
    sp = game.entities.get(scene, "position");
    sp.x = game.canvas.width * 0.5 - sw * 0.5;

    fw = game.entities.get(fish, "size").width;
    fp = game.entities.get(fish, "position");
    fp.x = game.canvas.width * 0.5 - fw * 0.5;
    fp.y = game.canvas.height;
    game.entities.set(fish, "rotation", { "angle": -Math.PI * 0.5 });

    tp = game.entities.get(tut, "position");
    tp.y = game.canvas.height * 0.5 + tp.y;

};
