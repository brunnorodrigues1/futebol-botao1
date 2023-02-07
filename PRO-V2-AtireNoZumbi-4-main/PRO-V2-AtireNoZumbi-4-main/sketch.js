var campo, campoImg;
var player1, player2;

var gol;

var ball, ballImg;
var player1Img, player2Img;

var score = 0;
var gameState = "Play";

var lose, winning;

function preload() {
  campoImg = loadImage("assets/campo.png");

  ballImg = loadImage("assets/bola.png");

  player1Img = loadImage("assets/botao1.png");
  player2Img = loadImage("assets/botao2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //adicionando a imagem de fundo
  campo = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20);
  campo.addImage(campoImg);
  campo.scale = 1.53;

  //criando o sprite do jogador
  player1 = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player1.addImage(player1Img);
  player1.scale = 0.3;
  player1.debug = true;
  player1.setCollider("rectangle", 0, 0, 300, 300);

  player2 = createSprite(displayWidth - 430, displayHeight - 300, 50, 50);
  player2.addImage(player2Img);
  player2.scale = 0.3;
  player2.debug = true;
  player2.setCollider("rectangle", 0, 0, 300, 300);

  gol = createSprite(displayWidth - 110, displayHeight - 470, 30, 360);
  gol.scale = 0.3;
  gol.debug = true;
  gol.setCollider("rectangle", 0, 0, 300, 300);
  gol.visible = true
  gol.shapeColor = "white"

  ball = createSprite(displayWidth - 785, displayHeight - 464, 50, 50);
  ball.addImage(ballImg);
  ball.scale = 0.1;
  ball.debug = true;
  ball.setCollider("rectangle", 0, 0, 300, 300);
}

function draw() {
  background(0);

  if (gameState === "play") { 
    if (keyDown("UP_ARROW") || touches.length > 0) {
      player1.y = player1.y - 30;
      player2.velocityY = -5
    }
    if (keyDown("DOWN_ARROW") || touches.length > 0) {
      player1.y = player1.y + 30;
    }
    if (keyDown("RIGHT_ARROW") || touches.length > 0) {
      player1.x = player1.x + 30;
    }
    if (keyDown("LEFT_ARROW") || touches.length > 0) {
      player1.x= player1.x - 30;
    }

    if(player1.isTouching(ball)){
      ball.x = ball.x + 30
    }
  
  }
  drawSprites();
}