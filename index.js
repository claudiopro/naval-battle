#!/usr/bin/env node

'use strict';

var readline = require('readline'),
  parser = require('./command-parser'),
  util = require('./util'),
  board = require('./board');

function quit() {
  console.log('Thanks for playing!');
  process.exit(0);
}

function restart() {
  board.init();
  console.log('Game restarted.');
}

function usage() {
  console.log('Usage:');
  console.log('A5       - hits a target square. Valid targets A-J, 1-10');
  console.log('cheat    - Prints the board');
  console.log('restart  - Restarts the game');
  console.log('quit     - Quits the game');
  console.log('usage    - Prints this list');
}

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('naval-battle> ');
rl.prompt();

board.init();
usage();

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'cheat':
      board.print();
      break;
    case 'quit':
      quit();
      break;
    case 'restart':
      restart();
      break;
    case 'usage':
      usage();
      break;
    default:
      var coords = parser.parse(line);
      if (coords) {
        console.log('x:',coords.x,'y:',coords.y);
        if (board.hit(coords.x, coords.y)) {
          console.log('HIT!');
          if (!board.hasShips()) {
            console.log('Game over! You won.');
            restart();
          }
        }
        else {
          console.log('MISS!');
        }
        break;
      }
      console.log('Invalid command: `' + line.trim() + '`');
      usage();
      break;
  }
  rl.prompt();
}).on('close', function() {
  quit();
});
