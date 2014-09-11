var gameLibrary = require('jsi-gamelib');

// npm install -g jsdoc
// jsdoc .
// open out/index.html

/**
 * A map.
 *
 * @typedef {Object} Map
 * @property {Array.<Room>} rooms - The rooms in the map.
 */

/**
 * A room.
 *
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
 *
 * @param {Map} map - The map thing.
 * @return {Room} - The room.
 * 
 */

module.exports.entranceLocator = function (map) {
  var entrance;

  map.rooms.forEach(function(room) {
    // find the one that's called entrance
    // if one of the properties of the array is entrance
    if (room.entrance) {
      entrance = room;
    };
  });
  return entrance;



};


/**
 * @param {String} file - Path to file containing map info.
 */
module.exports.readMap = function(file) {
  return require(file);
  
};
