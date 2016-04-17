"use strict";

var particles = require("splat-ecs/lib/particles.js");
var config = new particles.Config();
config.qtyMin = 3;
config.qtyMax = 6;
config.velocityMin = 0.05;
config.velocityMax = 0.10;
config.sizeMin = 0.5;
config.arcWidth = Math.PI * 2;
config.lifeSpanMin = 500;
config.lifeSpanMax = 750;

var follow, angle, entitySize, otherSize, otherPos, collisions, round, other, i, indicatorImage, type, oldType, newType, otherVal, otherType, indicatorType, camera = 0, player = 1, indicator = 4, heart = 6; // eslint-disable-line no-unused-vars


function newPosition(entity, other, game) {
    angle = game.entities.get(other, "rotation").angle;
    entitySize = game.entities.get(entity, "size");
    otherSize = game.entities.get(other, "size");
    otherPos = game.entities.get(other, "position");
    var pos = game.entities.get(entity, "position");
    if (game.entities.get(entity, "heart")) {
        pos.x = otherPos.x + (otherSize.width / 2) - (entitySize.width / 2) + ((Math.cos(angle) * otherSize.width / 4.5));
        pos.y = otherPos.y + (otherSize.height / 2) - (entitySize.height / 2) + ((Math.sin(angle) * otherSize.height / 3.5));
    } else {
        pos.x = otherPos.x + (otherSize.width / 2) - (entitySize.width / 2) + ((Math.cos(angle) * otherSize.width / 3));
        pos.y = otherPos.y + (otherSize.height / 2) - (entitySize.height / 2) + ((Math.sin(angle) * otherSize.height / 3));
    }
    return pos;
}
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        follow = game.entities.get(entity, "hitbox_for");
        game.entities.set(entity, "position", newPosition(entity, follow, game));
        game.entities.set(heart, "position", newPosition(heart, follow, game));
        collisions = game.entities.get(entity, "collisions");
        indicatorType = game.entities.get(indicator,"type");
        round = game.entities.get(camera, "round");
        indicatorImage = game.entities.get(indicator, "image");

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
            game.sounds.play("dropletts.wav");
            game.entities.destroy(other);
            if (otherType !== indicatorType) {
                game.entities.set(camera, "shake", { "duration": 250, "magnitude": 25 });
            } else {
                newType = Math.floor(Math.random() * 4) + 1;
                game.entities.set(indicator,"type",newType);
                switch (round) {
                    case 0:
                        game.entities.set(indicator,"type",0);
                        break;
                    default:
                        switch (newType) {
                            case 1:
                                indicatorImage.name = "YellowFood.png";
                                break;
                            case 2:
                                indicatorImage.name = "GreenFood.png";
                                break;
                            case 3:
                                indicatorImage.name = "BlueFood.png";
                                break;
                            case 4:
                                indicatorImage.name = "RedFood.png";
                                break;
                        }
                }
            }
        }
    }, "player_hitbox");
};
