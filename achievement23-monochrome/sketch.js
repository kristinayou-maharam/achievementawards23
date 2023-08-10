let flowers = [];
let isVisible = true;
let maharam;

function preload(){
  maharam = loadFont('src/MaharamNeue-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, 1200);
}

function mousePressed() {

  isVisible = false;

  flowers.push(new Flower(mouseX, mouseY, width, height));

  for (let i = 0; i < random(5,15); i++) {
    flowers[i] = new Flower();
  }
}

function draw() {
  background(77,117,182);

  if (isVisible) {
    fill(183, 214, 255);
    textSize(14);
    textAlign(CENTER,CENTER);
    textFont(maharam);
    text("Click Anywhere on the Screen", mouseX+120, mouseY+10);
  }
  
  

  for (i = flowers.length - 1; i >= 0; i--) {
    flowers[i].show();
    flowers[i].move();
    flowers[i].bounce();
  }
}

class Flower {
  constructor(x, y, w, h, xspeed, yspeed) {
    this.x = mouseX;
    this.y = mouseY;
    this.width = 10;
    this.height = 10;
    this.xspeed = random(-4, 4);
    this.yspeed = random(-4, 4);
    this.col = color( random(50,250), random(50,250), random(50,250), 120);
  }

  show() {
    fill(this.col);
    ellipse(this.x, this.y, this.width, this.height, this.speed, this.col);

  }

  move() {
    this.y += this.yspeed;
    this.x += this.xspeed;
  }
  
  bounce(){
    if (this.x < 0 || this.x> width){
      this.xspeed *= -1}; 
    if (this.y < 0 || this.y> height){
      this.yspeed *= -1 
    } }
    
  updateColor() {
    this.color = color(random(255),147,random(255));
  }
}
