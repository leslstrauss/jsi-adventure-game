var chai = require("chai");
var expect = chai.expect;
var path = require("path");
var lib = require('../index');

describe("the game", function() {
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
    var entrance = lib.findEntrance(map);
    expect(entrance).to.eql(roomB, 'Entrance room should be B');
  });

  it("looks for the treasure given an object", function() {
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
      "west": "B",
      "treasure": true
    };
    var map = { "rooms": [roomB, roomC] }; // changed var name
    var treasure = lib.findTreasure(map);
    expect(treasure).to.eql(roomC, 'treasure room should be C');
  });


  it("can read maps", function(done) {
    var testFile = path.join(__dirname, "fixtures/simple-game.json");
    lib.readMap(testFile, function(err, map) {
      expect(map).to.have.property("rooms");
      expect(err).to.not.exist;
      done();
    });
  });

  it("gives errors when reading maps for missing files", function(done) {
    var testFile = path.join(__dirname, "fixtures/missing-game.json");
    lib.readMap(testFile, function(err, map) {
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
    var entrance = lib.findEntrance(map);
    expect(entrance).to.eql(roomB, "Entrance room should be B");
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
    var result = lib.availableDirections(roomB);
    expect(result.sort()).to.eql(["north", "east", "west"].sort())
  });

  it ("tells available directions in a specific order", function (){
    var roomB = {
      "name": "B",
      "north": "E",
      "east": "C",
      "south": "F",
      "west": "A",
      "entrance": "south"
    };
    var result = lib.availableDirections(roomB);
    expect(result).to.eql(["north", "east", "south", "west"])
  });
  it("tells us how many doors are available", function() {
    var chamberOfSecrets = {
      "name": "C",
      "north": null,
      "east": null,
      "south": null,
      "west": "Champagne Room"

    };
    var result = lib.availableDoorCount(chamberOfSecrets);
    expect(result).to.eql(1);
  });

  it("where does that direction go?", function () {
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
    var result = lib.findNextRoom(map, roomB, "east");
    expect(result).to.eql(roomC);
  });
});
