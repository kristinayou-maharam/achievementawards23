//Code adapted from slow_izzm- 'confetti' sketch

let confettiColor = [], confetti = [];

function setup() {
  createCanvas(windowWidth,windowHeight+300);
	confettiColor = [color('#FFF9C9'), color('#FF88CF'), color('#72c8b6')];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
  }
}

function draw() {
  background(77,117,182);
	
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