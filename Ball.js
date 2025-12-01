class Ball {
   
    constructor(x, y, w) {
this.pos = createVector( x, y);
this.w = w;
}

show() {
noStroke();
fill(120, 75, 120);
ellipse(this.pos.x, this.pos.y, this.w, this.w);
}


}
