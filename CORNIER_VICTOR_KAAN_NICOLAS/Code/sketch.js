let data1
let data2
let data3
let layerX;
let layerY;
let layerZ;
let layerA;
let layerX1;
let layerY1;
let layerZ1;
let layerA1;
let back;
let info;

function preload() {
  data1 = loadJSON("essai1.json", function () {
    console.log("done")
  })
  data2 = loadJSON("essai2.json", function () {
    console.log("done")
  })
  data3 = loadJSON("essai3.json", function () {
    console.log("done")
  })
  data4 = loadJSON("essai4.json", function () {
    console.log("done")
  })
  data5 = loadJSON("essai5.json", function () {
    console.log("done")
  })
  data6 = loadJSON("essai6.json", function () {
    console.log("done")
  })
  data7 = loadJSON("essai7.json", function () {
    console.log("done")
  })
  data8 = loadJSON("essai8.json", function () {
    console.log("done")
  })
  data9 = loadJSON("essai9.json", function () {
    console.log("done")
  })
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)
  layerX = new Riso('yellow');
  layerY = new Riso('red');
  layerZ = new Riso('green');
  layerA = new Riso('blue');
  layerX1 = new Riso('yellow');
  layerY1 = new Riso('red');
  layerZ1 = new Riso('green');
  layerA1 = new Riso('blue');
  back = new Riso('black')
  info = new Riso('white')

  
}

function draw() {
  background(255);
  clearRiso(); // remove everything


  drawViz1(); // draw each viz in its layer
  drawViz2(); 
  drawViz3(); 
  drawViz4(); 
  drawViz5(); 
  drawViz6(); 
  drawViz7(); 
  drawViz8(); 
  drawViz9(); 
  drawViz10(); 
  


 



  back.fill(255)
  back.rect(0, 0, width, height)

  info.stroke(255);
info.strokeWeight(3);
info.line(0, height * 0.8, width, height * 0.8);
info.noStroke();
info.fill(255);
info.textStyle(BOLD);
info.textFont('Arial');
info.textAlign(LEFT, CENTER);
info.textSize(36);
info.text('"Pen Spinning" Patterns -', 0, height * 0.83);
info.text('  Xuan, Kaan & Victor', 0, height * 0.87);
info.textSize(20);
info.textStyle(ITALIC);
info.text('   6th of January 2020 from 10:51:28 to 10:52:31 am', 0, height * 0.93);
info.text('   acceleromter mounted on the back of the pen.', 0, height * 0.96);
info.text('   success', width * 0.71, height * 0.96);
info.text('   missed', width * 0.71, height * 0.91);
info.textSize(22);
info.textStyle(BOLD);
info.textFont('Arial');
info.text('  9 pen spinning tests', width * 0.66, height * 0.86);




  back.cutout(layerX)
  back.cutout(layerY)
  back.cutout(layerZ)
  back.cutout(layerA)
  back.cutout(info)

  layerA.cutout(layerX)
  layerA.cutout(layerY)
  layerA.cutout(layerZ)
  drawRiso(); // display the layers drawn previously

}



function drawViz1() {
  let dataSize = Object.keys(data1).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data1[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.2 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.15 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data1[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data1[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.2 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.15 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data1[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.2 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.15 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.2, height * 0.15, height * 0.20, height * 0.20)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.2, height * 0.15, height * 0.20, height * 0.20)
  }

}

function drawViz2() {
  let dataSize = Object.keys(data2).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data2[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.5 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.15 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data2[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data2[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.5 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.15 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data2[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.5 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.15 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.5, height * 0.15, height * 0.20, height * 0.20)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.5, height * 0.15, height * 0.20, height * 0.20)
  }

}

function drawViz3() {
  let dataSize = Object.keys(data3).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data3[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.8 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.15 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data3[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data3[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.1)
    let x12 = width * 0.8 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.15 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data3[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.8 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.15 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.8, height * 0.15, height * 0.20, height * 0.20)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.8, height * 0.15, height * 0.20, height * 0.20)
  }

}

function drawViz4() {
  let dataSize = Object.keys(data4).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data4[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.2 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.4 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data4[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data4[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.2 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.4 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data4[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.2 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.4 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.2, height * 0.4, height * 0.20, height * 0.20)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.2, height * 0.4, height * 0.20, height * 0.20)
  }

}

function drawViz5() {
  let dataSize = Object.keys(data5).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data5[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.5 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.4 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data5[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data5[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.5 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.4 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data5[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.5 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.4 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.5, height * 0.4, height * 0.2, height * 0.2)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.5, height * 0.4, height * 0.2, height * 0.2)
  }

}

function drawViz6() {
  let dataSize = Object.keys(data6).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data6[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.8 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.4 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data6[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data6[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.8 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.4 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data6[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.8 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.4 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.8, height * 0.4, height * 0.2, height * 0.2)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.8, height * 0.4, height * 0.20, height * 0.20)
  }

}

function drawViz7() {
  let dataSize = Object.keys(data7).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data7[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.2 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.65 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data7[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data7[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.2 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.65 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data7[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.2 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.65 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.2, height * 0.65, height * 0.20, height * 0.2)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.2, height * 0.65, height * 0.20, height * 0.2)
  }

}

function drawViz8() {
  let dataSize = Object.keys(data8).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data8[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.5 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.65 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data8[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data8[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.5 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.65 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data8[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.5 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.65 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.5, height * 0.65, height * 0.2, height * 0.2)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.5, height * 0.65, height * 0.2, height * 0.2)
  }

}

function drawViz9() {
  let dataSize = Object.keys(data9).length;
  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  let reussi = true;

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r11 = map(data9[i].y, -30, 30, 10, height * 0.10) // données de l'accéléromètre
    r11 = constrain(r11, 10, height * 0.12)
    let x11 = width * 0.8 + r11 * cos(angle) // abscisse calculée par application de la formule
    let y11 = height * 0.65 + r11 * sin(angle) // ordonnée calculée par application de la formule

    layerX.vertex(x11, y11)

    if (data9[i].vib > 5) { reussi = false; }
  }
  layerX.endShape(CLOSE);


  layerY.fill(255); // dessiner nos formes avec un remplissage opaque
  layerY.beginShape();


  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r12 = map(data9[i].x, -20, 20, 10, height * 0.08) // données de l'accéléromètre
    r12 = constrain(r12, 10, height * 0.10)
    let x12 = width * 0.8 + r12 * cos(angle) // abscisse calculée par application de la formule
    let y12 = height * 0.65 + r12 * sin(angle) // ordonnée calculée par application de la formule

    layerY.vertex(x12, y12)
  }

  layerY.endShape(CLOSE);

  layerZ.fill(255); // dessiner nos formes avec un remplissage opaque
  layerZ.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r13 = map(data9[i].z, -10, 10, 10, height * 0.06) // données de l'accéléromètre
    r13 = constrain(r13, 10, height * 0.08)
    let x13 = width * 0.8 + r13 * cos(angle) // abscisse calculée par application de la formule
    let y13 = height * 0.65 + r13 * sin(angle) // ordonnée calculée par application de la formule

    layerZ.vertex(x13, y13)
  }
  layerZ.endShape(CLOSE);

  layerA.fill(255); // dessiner nos formes avec un remplissage opaque

  if (reussi == true) {
    layerA.ellipse(width * 0.8, height * 0.65, height * 0.2, height * 0.2)
  }
  else {
    layerA.rectMode(CENTER)
    layerA.rect(width * 0.8, height * 0.65, height * 0.2, height * 0.2)
  }

}

function drawViz10() {
  
    layerA.rect(width * 0.7, height * 0.91, height * 0.04, height * 0.04)
    layerA.ellipse(width * 0.7, height * 0.96, height * 0.04, height * 0.04)

}


function mouseClicked() {
  exportRiso();
}
