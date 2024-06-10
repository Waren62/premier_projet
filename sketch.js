
let player;
let foods = [];
let enemys = []
let score = 0
let timer = 0
let lives = 3
function countTimer(){
  timer = timer + 1
  setTimeout(countTimer, 1000);
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  player = new Player(width-25, height-25);
  for (i=0; i<10; i++) foods.push(new Food(
  random (5, width-5),
  random (5, height-5)
  ));
  for (i=0; i<2; i++) enemys.push(new Enemy(
  random (50, width-50),
  random (100, 125),
  random (2, 4),
  random (2, 4),
  22.5
  ));
  countTimer();
}

function draw() {
  background(220);
  player.draw();
  player.move();
  player.checkCollision(foods, function() {
    foods.splice(i, 1)
    score = score + 1
  });
  enemys.forEach( function (enemy){
    enemy.draw();
    enemy.move();
    enemy.size();
  });
  player.checkCollision(enemys, function(enemy, dx, dy) {
    lives = lives - 1
    if(lives < 1) {
      background(0)
      fill(255)
      textAlign(CENTER)
      text("Game Over", width/2, height/2)
      noLoop()
    };
    enemy.vx = dx*0.3
    enemy.vy = dy*0.3
  });
  
  foods.forEach( function (food){
    //food.draw();
  });
  
  
  fill(0)
  textSize(24)
  text("Score:" + score, 10, 24)
  text("Timer:" + timer, 10, 48)
  text("lives:" + lives, 10, 72)
  
  
  
}