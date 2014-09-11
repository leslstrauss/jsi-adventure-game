var chai = require('chai');
var expect = chai.expect;
var game = require('./the-game');

describe("the-game()", function() {
  // given an object, it looks for the entrance
  it("looks for the entrance given an object", function() {
  //reads the rooms file and expects entrance to equal south
  var map = //object
  var rooms = map.rooms;
  var roomB = rooms[1];
  var entrance = roomB.entrance;
  expect(entranceLocator(someMap)).to.eql("south")
  });
});

given a object/file, look for the entrance

it introduces the game

it states what room you are in

given a room, which directions can you go
it offers available directions

it repeats when you choose a direction that is not available

it receives user input

it moves to the next room

it says you found the treasure when you reach K

it tells you how to quit