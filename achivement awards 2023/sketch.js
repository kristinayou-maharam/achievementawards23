//Code adapted from slow_izzm- 'confetti' sketch

let confettiColor = [], confetti = [];

function setup() {
  createCanvas(windowWidth,windowHeight+300);
	confettiColor = [color('#FF9900'), color('#5BC65F'), color('#F778EA')];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
  }
}

function draw() {
  background(249, 223, 176);
	
	for (let i = 0; i < confetti.length / 2; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }

  for (let i = int(confetti.length / 2); i < confetti.length; i++) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight+300);
}