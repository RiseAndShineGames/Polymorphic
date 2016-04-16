"use strict";

var follow, angle, entitySize, otherSize, otherPos, collisions, other, i;

function newPosition(entity, other, game) {
    angle = game.entities.get(other, "rotation").angle;
    entitySize = game.entities.get(entity, "size");
    otherSize = game.entities.get(other, "size");
    otherPos = game.entities.get(other, "position");
    return {
        "x": otherPos.x + (otherSize.width / 2) + ((Math.cos(angle) * otherSize.width / 2)) - (entitySize.width / 2),
        "y": otherPos.y + (otherSize.height / 2) + ((Math.sin(angle) * otherSize.height / 2)) - (entitySize.height / 2)
    };
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        follow = game.entities.get(entity, "hitbox_for");
        game.entities.set(entity, "position", newPosition(entity, follow, game));
        collisions = game.entities.get(entity, "collisions");
        for (i = 0; i < collisions.length; ++i) {
            other = collisions[i];
            other.destroy();
        }
    }, "player_hitbox");
};
