var points={x:0,y:250};
var speed=15;
var col={r:0,g:0,b:0};

function setup() {
  createCanvas(1366, 555);
}

function draw() {
  background(20);
  if(points.x>=width || points.x<0)
  {
    col.r=random(100,255);
    col.g=random(200,255);
    col.b=random(1,255);
    speed=speed*-1;
    fill(col.r,col.g,col.b);
  }
  ellipse(points.x,points.y,75,75);
  points.x=points.x+speed;

}
