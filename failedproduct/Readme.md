var font;

function preload() {
  font = loadFont("AXIS-ExtraBold-20.vlw");
}

function setup() {
size(600,300);
background(51);
//textFont(font);
//textSize(192);
//fill(255);
//noStroke();
//text("COVID", 100, 200);

var points = font.textToPoints("COVID", 100, 200, 192);
console.log(points);

for (var i = 0; i < points.length; i++) {
  var pt = points[i];
  stroke(255);
  strokeWeight(8);
  point(pt.x, pt.y);
}
}
function draw() {

}
