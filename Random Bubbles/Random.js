var points={x:0,y:0,d:1};
var col={r:0,g:0,b:0};
function setup() {
  createCanvas(1500, 750);
  background(0);
}

function draw() {
  col.r=random(0,255);
  col.g=random(0,50);
  col.b=random(20,255);

  points.x=random(0,width);
  points.y=random(0,height);
  points.d=random(2,75);

  // if(points.x >=683)
  // {
  //   fill(col.r,col.g,col.b,200);
  //   noStroke();
  //   ellipse(points.x,points.y,points.a,points.a);

  // }
  // else{

  fill(col.r,col.g,col.b,1000);
  noStroke();
  ellipse(points.x,points.y,points.d,points.d)
  
}
