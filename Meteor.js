class Meteor {
constructor() {
    this.pos = createVector(0,0);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.mass = 125;
}
show() {
    fill(200,0,0);
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);

}
calculateAttraction(m) {
  let force = p5.Vector.sub(m.pos,this.pos);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    let strength = (this.mass * m.mass/200) / (distance * distance);
    force.mult(strength);
    return force;
  }






}