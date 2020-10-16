var font;
var vehicles = [];

var texts = ['COVID-19','wear', 'a', 'mask'];
var nextT = 0;
var maxChangeForce = 10;

var texts = ['wear', 'a', 'mask'];
var nextT=0;

function preload(){
  font = loadFont('DIN.otf')
}

function setup() {
  createCanvas(1000, 400);
  background(51);
  
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
  background(51);
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

