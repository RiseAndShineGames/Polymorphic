"use strict";

var particles = require("../../../node_modules/splat-ecs/lib/particles.js");
var config = new particles.Config();
config.qtyMin = 3;
config.qtyMax = 6;
config.velocityMin = 0.05;
config.velocityMax = 0.10;
config.sizeMin = 0.5;
config.arcWidth = Math.PI * 2;
config.lifeSpanMin = 500;
config.lifeSpanMax = 750;

var follow, angle, entitySize, otherSize, otherPos, collisions, other, i, otherVal, otherType, indicatorType, camera = 0, player = 1, indicator = 4; // eslint-disable-line no-unused-vars


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
        indicatorType = game.entities.get(indicator,"type");
        for (i = 0; i < collisions.length; ++i) {
            other = collisions[i];
            otherType = game.entities.get(other,"type");
            switch (otherType) {
                case 1:
                    config.prefab = "yellow_particle";
                    break;
                case 2:
                    config.prefab = "green_particle";
                    break;
                case 3:
                    config.prefab = "blue_particle";
                    break;
                case 4:
                    config.prefab = "red_particle";
                    break;
                default:
                config.prefab = "baby_particle";
            }
            otherVal = 1;
            otherVal = (otherType === indicatorType ? otherVal : otherVal * -1);
            game.entities.set(camera,"round_score",game.entities.get(camera,"round_score") + otherVal);
            config.origin = other;
            particles.create(game, config);
            game.entities.destroy(other);
            //game.entities.set(camera, "shake", { "duration": 250, "magnitude": 7 });
        }
    }, "player_hitbox");
};
