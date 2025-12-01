class Meteor {
constructor() {
    this.pos = createVector(0,0);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.w = 125;
}
show() {
    fill(200,0,0);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);

}







}