var font;
var vehicles = [];


function preload(){
  font = loadFont('DIN.otf')
}


function setup() {
  createCanvas(900, 400);
  
  var points = font.textToPoints('COVID-19',30,250,185);
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
  background(0);
  textSize(15);
  fill(255);
  noStroke();
  text('stay 1.5m away to keep the COVID away!',300,350)
  
  
  for (var i = 0; i < vehicles.length;i++){
       var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
       }
}


