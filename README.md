[![Build Status](https://travis-ci.org/claudiopro/naval-battle.svg?branch=master)](https://travis-ci.org/claudiopro/naval-battle)

# naval-battle

A very simple game of battleships ( http://en.wikipedia.org/wiki/Battleship_(game) ). If you’ve never played the game, you can get a feel for it from this online flash game ( http://www.learn4good.com/games/board/battleship.htm ). The program is a simple console application that allows a single human player to play a one-sided game of battleships against the computer. The program creates a 10x10 grid, and places a number of ships on the grid at random with the following sizes:

* 1x Battleship (5 squares)
* 2x Destroyers (4 squares)

The application accepts input from the user in the format “A5” to signify a square to target, and feedbacks to the user whether the shot was successful, and additionally reports on the sinking of any vessels.

## Usage

* `A5` - hits a target square. Valid targets `A-J`, `1-10`
* `cheat` - prints the board
* `restart` - Restarts the game
* `quit` - Quits the game
* `usage` - Prints usage instructions

## Run

Requires [Node.js](https://nodejs.org), tested with `v4.1.0`. [`nvm`](https://www.npmjs.com/package/nvm) is recommended.

```bash
git clone git@github.com:claudiopro/naval-battle.git
cd naval-battle
npm install
./index.js
```
## Test

```bash
npm install
npm test
```

# License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Claudio Procida
