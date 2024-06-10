class Enemy {
    constructor(sx, sy, svx, svy){
      this.x = sx
      this.y = sy
      this.vx = svx
      this.vy = svy
      this.r = 30
      this.d = this.r * 2
      
    }
    draw(){
      push();
      fill (250, 0, 0)
      circle (this.x, this.y, 2*this.r)
      pop();
    }
    move(){
      this.y = this.y + this.vy
      if(this.y>height-this.r) this.vy = -this.vy - 0.35
      if(this.y<this.r) this.vy= -this.vy
      this.x = this.x + this.vx
      if(this.x>width-this.r) this.vx = -this.vx
      if(this.x<this.r) this.vx= -this.vx
      this.vy = this.vy+0.35
    }
    size(){
      let v = noise(millis() / 1000)
      //if(timer == 4) this.r = this.r * 1.01
      if(v > 0.7) this.r = this.r * 1.01
      if(v < 0.2) this.r = this.r /1.01
      this.r = constrain(this.r, 20, 60)
      this.d = this.r * 2
      console.log()
    }
    collision() { 
    
    }
  }