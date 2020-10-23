PFont calNow;
float spin=0;
void setup(){
  size(500,500);
  background(255);
  fill(0);
  smooth(4);
  calNow=loadFont("Calibri-Bold-48.vlw");
  textAlign(CENTER,CENTER); 
  frameRate(15); 
}
void draw(){
  fill(0);
  translate(width/2,height/2);
  spin+=.2; 
  rotate(spin);
  textFont(calNow);
  textSize(48);
  text("Slave to The Algorithm",0,0); 
  fill(255,20);
  //noStroke();
  translate(-width/2,-height/2);
  rect(0,0,width,height);
}
void keyPressed(){
  background(255); 
}
