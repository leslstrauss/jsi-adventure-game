var chai = require('chai');
var expect = chai.expect;
var path = require('path');
var game = require('../the-game');
var entranceLocator = game.entranceLocator;
var readMap = game.readMap;
var whereCanIGo = game.whereCanIGo;

describe("the-game()", function() {
  // given an object, it looks for the entrance
  it("looks for the entrance given an object", function() {
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
    var map = { "rooms": [roomB, roomC] }; // changed var name
    var entrance = entranceLocator(map);
    expect(entrance).to.eql(roomB, 'Entrance room should be B');
  });

  it('can read maps', function(done) {
    var testFile = path.join(__dirname, 'fixtures/simple-game.json');
    readMap(testFile, function(err, map) {
      expect(map).to.have.property('rooms');
      expect(err).to.not.exist;
      done();
    });
  });

  it('gives errors when reading maps for missing files', function(done) {
    var testFile = path.join(__dirname, 'fixtures/missing-game.json');
    readMap(testFile, function(err, map) {
      expect(err).to.exist;
      expect(map).to.not.exist;
      done();
    });
  });

  it("looks for the entrance given an object", function() {
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
    var map = { "rooms": [roomC, roomB] };
    var entrance = entranceLocator(map);
    expect(entrance).to.eql(roomB, 'Entrance room should be B');
  });

  it ("tells available directions", function (){
    var roomB = {
      "name": "B",
      "north": "E",
      "east": "C",
      "south": null,
      "west": "A",
      "entrance": "south"
    };
    var result = whereCanIGo(roomB);
    expect(result).to.eql(["north", "east", "west"])
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

// You are now playing The Best Game Ever. When prompted, please use -n to select north,
// When you reach the correct room, the game will announce that you have found the secret treasure
// and prompt you to press -q to quit.
// You are now in room C. Would you like to go East or North?
