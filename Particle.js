class Particle {
   
    constructor(x, y, w) {
this.pos = createVector( x, y);
this.origin = createVector(x, y);
this.vel = createVector(0, 0);
this.acc = createVector(0, 0);
this.mass = w;
}

show() {
noStroke();
fill(120, 75, 120);
ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
}
addForce(force) {
this.acc.add(force);
}
update() {
this.vel.add(this.acc);
this.pos.add(this.vel);
this.acc.mult(0);
}
calculateDrag() {
let speed = this.vel.mag();
let dragMagnitude = 0.1 * speed * speed;
let dragForce = this.vel.copy();
dragForce.mult(-1);
dragForce.normalize();
dragForce.mult(dragMagnitude);
return dragForce;


}
calculateReturnForce(k) {
  let force = p5.Vector.sub(this.origin, this.pos);
  force.mult(k);
  return force;
}

}
