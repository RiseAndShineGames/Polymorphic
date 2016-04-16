"use strict";

var particles = require("../../../node_modules/splat-ecs/lib/particles.js");
var config = new particles.Config();
config.prefab = "baby_particle";
config.qtyMin = 3;
config.qtyMax = 6;
config.velocityMin = 0.05;
config.velocityMax = 0.10;
config.sizeMin = 0.5;
config.arcWidth = Math.PI * 2;
config.lifeSpanMin = 500;
config.lifeSpanMax = 750;

var follow, angle, entitySize, otherSize, otherPos, collisions, other, i, camera = 0, player = 1; // eslint-disable-line no-unused-vars

function newPosition(entity, other, game) {
    angle = game.entities.get(other, "rotation").angle;
    entitySize = game.entities.get(entity, "size");
    otherSize = game.entities.get(other, "size");
    otherPos = game.entities.get(other, "position");
    return {
        "x": otherPos.x + (otherSize.width / 2) - (entitySize.width / 2) + ((Math.cos(angle) * otherSize.width / 4)) ,
        "y": otherPos.y + (otherSize.height / 2) - (entitySize.height / 2) + ((Math.sin(angle) * otherSize.height / 4))
    };
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        follow = game.entities.get(entity, "hitbox_for");
        game.entities.set(entity, "position", newPosition(entity, follow, game));
        collisions = game.entities.get(entity, "collisions");
        for (i = 0; i < collisions.length; ++i) {
            other = collisions[i];
            config.origin = other;
            particles.create(game, config);
            game.sounds.play("nom.wav");
            game.entities.destroy(other);
            //game.entities.set(camera, "shake", { "duration": 250, "magnitude": 7 });
        }
    }, "player_hitbox");
};
