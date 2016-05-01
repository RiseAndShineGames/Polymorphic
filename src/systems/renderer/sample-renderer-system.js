"use strict";

var point, angle, opposite, adjacent, distance;
var collidables, vp, vs, vc, op, os, oc, i, image, size = { "width": 45 }, constant = 21150;
var radius, type;
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
                //boxSize = 20;
                radius = 470;
                type = game.entities.get(collidables[i], "type");
                image = new Image();
                switch (type) {
                    case 1:
                        image.src = "./images/yellow_arrow.png";
                        break;
                    case 2:
                        image.src = "./images/green_arrow.png";
                        break;
                    case 3:
                        image.src = "./images/blue_arrow.png";
                        break;
                    case 4:
                        image.src = "./images/red_arrow.png";
                        break;
                    default:
                        image.src = "./images/white_arrow.png";
                        break;
                }
                opposite = oc.y - vc.y;
                adjacent = oc.x - vc.x;
                angle = Math.atan2(opposite, adjacent);
                point = getPointOnCircle(vc, angle, radius);
                distance = Math.sqrt((vc.x - oc.x) * (vc.x - oc.x) + (vc.y - oc.y) * (vc.y - oc.y));
                if (distance > radius) {
                    angle += Math.PI;
                    context.translate(point.x, point.y);
                    context.rotate(angle);
                    // Law of inverse variation:
                    // Constant = 21150 so width = 45 at the radar radius
                    // @see http://www.regentsprep.org/regents/math/algtrig/ate7/inverse%20variation.htm
                    size.width = constant / distance;
                    size.height = size.width * 2.5;
                    context.drawImage(image, -size.width * 0.5, -size.height * 0.5, size.width, size.height);
                    context.rotate(-angle);
                    context.translate(-point.x, -point.y);
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
