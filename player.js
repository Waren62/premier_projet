class Player {
    constructor(sx, sy) {
      this.x = sx
      this.y = sy
      this.vx = 0
      this.vy = 0
      this.d = 30
    }
    keyboard() {
      if (keyIsDown(RIGHT_ARROW)) this.vx += 1;
      if (keyIsDown(LEFT_ARROW)) this.vx += -1;
    }
    move () {
      this.keyboard();
      this.x = this.x + this.vx
      this.y = this.y + this.vy
      this.vx = this.vx * 0.9;
      this.vy = this.vy * 0.9;
    }
    checkCollision(others, action) {
      others.forEach((other, i) => {
        let dx = other.x - this.x
        let dy = other.y - this.y
        let d = sqrt(dx*dx + dy*dy)
        if ((other.d+this.d)/2 > d){
          action(other, dx, dy);
  
        }
      });
    }
    draw() {
      push();
      noStroke()
      fill(0, 250, 0)
      circle(this.x, this.y, this.d)
      pop();
    }
  }