"use strict";

var fi, frog = 2;

module.exports = function(entity, game) {
    fi = game.entities.get(frog, "image");
    fi.name = game.entities.get(frog, "won_frog");
};
