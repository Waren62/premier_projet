class Food {
    constructor(sx,sy, svx, svy) {
      this.x = sx   
      this.y = sy
      this.r = 5
      this.d = this.r * 2
    }
      draw (){
      
      fill(50,0,50)
      circle(this.x, this.y, this.d)
    }
  }