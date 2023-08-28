class Confetti {
    constructor(_x, _y, _s) {
      this.x = _x;
      this.y = _y;
      this.speed = _s;
      this.time = random(0, 100);
      this.color = random(confettiColor);
      this.amp = random(2, 30);
      this.phase = random(.5, 1.5);
      this.size = random(width / 85, height / 60);
      this.form = round(random(0, 1));
    }
  
    confettiDisplay() {
      fill(this.color);
      // blendMode(SCREEN);
   stroke(0);
      push();
      translate(this.x, this.y);
      translate(this.amp * sin(this.time * this.phase), this.speed * cos(2 * this.time * this.phase));
      rotate(this.time);
      rectMode(CENTER);
      scale(cos(this.time / 4), sin(this.time / 4));
      if (this.form === 0) {
        rect(0, 0, this.size, this.size / 2);
      } else {
        ellipse(0, 0, this.size);
      }
      pop();
  
      this.time = this.time + 0.1;
  
      this.speed += 1 / 200;
  
      this.y += this.speed;
    }
  }