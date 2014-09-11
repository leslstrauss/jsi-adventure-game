var chai = require('chai');
var expect = chai.expect;
var game = require('../the-game');
var entranceLocator = game.entranceLocator;

describe("the-game()", function() {
  // given an object, it looks for the entrance
  it.skip("looks for the entrance given an object", function() {
    //reads the rooms file and expects entrance to equal south
    var roomB = {
      "name": "B",
      "north": "E",
      "east": "C",
      "south": null,
      "west": "A",
      "entrance": "south"
    };
    var roomC = {
      "name": "C",
      "north": null,
      "east": null,
      "south": null,
      "west": "B"
    };
    var map = { "rooms": [roomB, roomC] };
    var entrance = entranceLocator(map);
    expect(entrance).to.eql(roomB, 'Entrance room should be B');
  });
});

// given a object/file, look for the entrance

// it introduces the game

// it states what room you are in

// given a room, which directions can you go
// it offers available directions

// describe('options', function(){
//   var room? = {

//   }
// });

// it repeats when you choose a direction that is not available

// it receives user input

// it moves to the next room

// it says you found the treasure when you reach K

// it tells you how to quit