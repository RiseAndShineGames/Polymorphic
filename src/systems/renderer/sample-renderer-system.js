"use strict";

var point, angle, opposite, adjacent, distance;
var collidables, vp, vs, vc, op, os, oc, i;
var boxSize, radius, type;
var viewPort = 5;
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    game.entities.registerSearch("linesToCollidablesSearch", ["collisions", "position", "size"]);
    ecs.add(function linesToCollidables(entities, context) {
        collidables = game.entities.find("collisions");

        vp = game.entities.get(viewPort, "position");
        vs = game.entities.get(viewPort, "size");
        vc = {
            "x": vp.x + (vs.width * 0.5),
            "y": vp.y + (vs.height * 0.5)
        };

        for (i = 0; i < collidables.length; i++) {
            if (game.entities.get(collidables[i], "food")) {
                op = game.entities.get(collidables[i], "position");
                os = game.entities.get(collidables[i], "size");
                oc = {
                    "x": op.x + (os.width * 0.5),
                    "y": op.y + (os.height * 0.5)
                };
                boxSize = 20;
                radius = 470;
                type = game.entities.get(collidables[i], "type");
                switch (type) {
                    case 1:
                        context.fillStyle = "yellow";
                        break;
                    case 2:
                        context.fillStyle = "green";
                        break;
                    case 3:
                        context.fillStyle = "blue";
                        break;
                    case 4:
                        context.fillStyle = "red";
                        break;
                    default:
                        context.fillStyle = "white";
                        break;
                }
                opposite = oc.y - vc.y;
                adjacent = oc.x - vc.x;
                angle = Math.atan2(opposite, adjacent);
                point = getPointOnCircle(vc, angle, radius);
                distance = Math.sqrt((vc.x - oc.x) * (vc.x - oc.x) + (vc.y - oc.y) * (vc.y - oc.y));
                if (distance > radius) {
                    context.fillRect(point.x, point.y, boxSize, boxSize);
                }
            }
        }
    }, "linesToCollidablesSearch");
};

function getPointOnCircle(point, angle, radius) {
    return {
        "x": point.x + (radius * Math.cos(angle)),
        "y": point.y + (radius * Math.sin(angle))
    };
}
