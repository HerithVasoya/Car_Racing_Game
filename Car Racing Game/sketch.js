//game variables
var gameState = 0;
var START = 0;
var PLAY = 1;
var END = 2;
var MAIN_MENU = 3;
var game, player, form;
//plr variables



function preload() {

}

function setup() {
  createCanvas(1000,800);
  game = new Game();
  game.start()
}

function draw() {
  background("black");
}