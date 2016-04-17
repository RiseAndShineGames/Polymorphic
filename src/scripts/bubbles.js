"use strict";

var particles = require("splat-ecs/lib/particles.js");
var player_config = new particles.Config();
player_config.qtyMin = 1;
player_config.qtyMax = 1;
player_config.velocityMin = 0.01;
player_config.velocityMax = 0.02;
player_config.sizeMin = 0.5;
player_config.arcWidth = Math.PI * 2;
player_config.lifeSpanMin = 500;
player_config.lifeSpanMax = 750;
player_config.prefab = "bubble";

var timers;

module.exports = function(entity, game) {
    player_config.origin = entity;
    particles.create(game, player_config);
    timers = game.entities.get(entity, "timers");
	timers.bubbles.time = 0;
	timers.bubbles.running = true;
};
