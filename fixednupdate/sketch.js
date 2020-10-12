var font;
var vehicles = [];

function preload(){
  font = loadFont('DIN.otf')
}
function setup() {
  createCanvas(800, 400);
  background(51);
 // textFont(font);
  //textSize(192);
  //fill(255);
  //noStroke();
  //text('COVID',100,200);
  
  var points = font.textToPoints('COVID',100,200,190);
  console.log(points);
  
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x,pt.y);
    vehicles.push(vehicle); 
    //stroke(255);
    //strokeWeight(8);
    //point(pt.x, pt.y);
  }
}

function draw() {
  background(51);
  for (var i = 0; i < vehicles.length;i++){
       var v = vehicles[i];
    v.update();
    v.show();
       }
}
