function setup() {
  createCanvas(windowWidth, windowHeight);
  
  positionX = width/2-300;
  positionY = height/2-300;
  characterWidth = 100;
  characterHeight = 100;
  
  //設定字符顏色
  characterColor = color(150,75,0);
  fillingColor = color(245,190,190);
  oreoColor = color(0);  // 鼠標按下此顏色更改
  oreoFill = color(255); // 鼠標按下此顏色更改
  }
  
  function draw() {
  background(255,217,170);
  leftEar(positionX, positionY, characterWidth, characterHeight, characterColor);
  rightEar(positionX, positionY, characterWidth, characterHeight, characterColor);
  leftEarFilling(positionX, positionY, characterWidth, characterHeight, fillingColor);
  rightEarFilling(positionX, positionY, characterWidth, characterHeight, fillingColor);
  face(positionX, positionY, characterColor);
  nose(positionX, positionY, characterWidth, characterHeight);
  mouth(positionX, positionY, characterWidth, characterHeight);
  fillingBlush(positionX, positionY, characterWidth, characterHeight, fillingColor);
  eyes(positionX, positionY, characterWidth, characterHeight);
  biscuit(characterWidth, characterHeight, oreoColor, oreoFill);//餅乾
  }
  // 左耳
  function leftEar(posX, posY, charWidth, charHeight, charColor) {
  push();
  translate(posX,posY);
  fill("#feba27");
  noStroke();
  ellipse(100,150,charWidth,charHeight);
  pop();
  }
  
  // 左耳內側
  function leftEarFilling(posX, posY, charWidth, charHeight, charColor) {
  push();
  translate(posX,posY);
  fill("#252324");
  noStroke();
  ellipse(105,160,charWidth/2,charHeight/2);
  pop();
  }
  
  // 右耳
  function rightEar(posX, posY, charWidth, charHeight, charColor) {
  push();
  translate(posX,posY);
  fill("#feba27");
  noStroke();
  ellipse(400,150,charWidth,charHeight);
  pop();
  }
  
  // 右耳內側
  function rightEarFilling(posX, posY, charWidth, charHeight, charColor) {
  push();
  translate(posX,posY);
  fill("#252324");
  noStroke();
  ellipse(395,160,charWidth/2,charHeight/2);
  pop();
  }
  
  // 臉型
  function face(posX, posY, charColor) {
  push();
  translate(posX,posY);
  fill("#feba27");
  noStroke();
  beginShape();
  curveVertex(70,190); //曲線頂點
  curveVertex(430,190);
  curveVertex(475,500);
  curveVertex(25,500);
  curveVertex(70,190);
  curveVertex(430,190);
  curveVertex(465,500);
  endShape(CLOSE);
  pop();
  }
  //眼睛
  function eyes(posX, posY, charWidth, charHeight) {
  push();
  translate(posX,posY);
  fill(0);
  xEyeRight = map(mouseX,0,width,135,215);
  yEyeRight = map(mouseY,0,height,340,390);
  ellipse(xEyeRight,yEyeRight,charWidth/3,charHeight/3);
  
  xEyeLeft = map(mouseX,0,width,285,365);
  yEyeLeft = map(mouseY,0,height,340,390);
  ellipse(xEyeLeft,yEyeLeft,charWidth/3,charHeight/3);
  pop();
  }
  
  // 鼻
  function nose(posX, posY, charWidth, charHeight) {
  push();
  translate(posX,posY);
  noStroke();
  fill(60,25,0);
  ellipse(250,425,charWidth,charHeight/2);
  pop();
  }
  
  // 嘴
  function mouth(posX, posY, charWidth, charHeight) {
  push();
  translate(posX,posY);
  xMouth = map(mouseX,0,width,240,260);
  yMouth = map(mouseY,0,width,25,85);
  fill(0);
  ellipseMode(CENTER);
  ellipse(xMouth,490,yMouth,charHeight/5);
  pop();
  }
  
  // 腮紅
  function fillingBlush(posX, posY, charWidth, charHeight) {
  push();
  translate(posX,posY);
  noStroke();
  fill("#ff0101");
  ellipse(150,425,charWidth/2,charHeight/3);
  ellipse(350,425,charWidth/2,charHeight/3);
  pop();
  }
  
  // orea
  function biscuit(charWidth, charHeight, color1, color2) {
  push();
  translate(mouseX-40,mouseY-40);
  rotate(1);
  noStroke();
  fill(color1);
  ellipse(0,0,charWidth/2,charHeight/2);
  fill(color2);
  ellipse(5,0,charWidth/2,charHeight/2);
  fill(color1);
  ellipse(10,0,charWidth/2,charHeight/2);
  fill(color2);
  textSize(12);
  text('OREO',-5 ,3);
  pop();
  }
  function mousePressed(){
  oreoFill = color(random(253),random(259),random(2));
  oreoColor = color(random(256),random(255),random(255));
  }
  
  function mouseReleased(){
  oreoFill = color(255);
  oreoColor = color(0);
  }
  
