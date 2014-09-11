var gameLibrary = require('jsi-gamelib');

/**
 * A map.
 * @typedef {Object} Map
 * @property {Array.<Room>} rooms - The rooms in the map.
 */

/**
 * A room.
 * @typedef {Object} Room
 * @property {String} name - The name of the room.
 * @property {?String} north - .
 * @property {?String} south - .
 * @property {?String} east - .
 * @property {?String} west - .
 * @property {?String} entrance - .
 */

/**
 * entranceLocator takes a mapObject and returns the
 * room with the entrance.
 * @param {Map} map - The map thing.
 * 
 */

// You are now playing The Best Game Ever. When prompted, please use -n to select north,
// When you reach the correct room, the game will announce that you have found the secret treasure
// and prompt you to press -q to quit.
// You are now in room C. Would you like to go East or North?

module.exports.entranceLocator = function () {

};