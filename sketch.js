
var database, player, game, form
var allPlayers
var playerCount=0
var gameState = 0
var cars,car1,car2,car3,car4
var car1Img, car2Img, car3Img, car4Img, trackImg


function preload(){
    trackImg = loadImage("images/track.jpg")
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    
    
    
    
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database()
    
    game = new Game()
    game.getState()
    game.start()
}

function draw(){

if(playerCount===4){
game.update(1)
}

if(gameState===1){
clear()
game.play()

}
    
}

