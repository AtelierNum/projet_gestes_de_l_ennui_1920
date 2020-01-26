
let layerX;
let layerY;
let layerZ;
let data;
let back;
let info

function preload() {
  data = loadJSON("15sec2.json", function () {
    console.log("done")
    console.log(Object.keys(data).length) // nombre d'entrées
    console.log(data[0]) // première entrée de notre fichier
    console.log(data[0].timestamp) // timestamp du premier point enregistré
    console.log(data[1].x)
    console.log(data[2].y)
    console.log(data[3].z) // valeur "x" du deuxième point enregistré
  })
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)

  back = new Riso('black')
  layerY = new Riso('red');
  layerX = new Riso('blue');
  layerZ = new Riso('yellow');
  info = new Riso('white')



}

function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}

function drawViz() {

  info.stroke(255);
info.strokeWeight(3);
info.line(0, height * 0.8, width, height * 0.8);
  back.fill(255)
  back.rect(0,0,width,height)
  info.noStroke();
info.fill(255);
info.textStyle(BOLD);
info.textFont('Arial');
info.textAlign(LEFT, CENTER);
info.textSize(28);
info.text('"Boring Voice" Patterns -', 0, height * 0.83);
info.text('  Audren - Harter', 0, height * 0.88);
info.textSize(16);
info.textStyle(ITALIC);
info.text('   6th of January 2020 from 9:55:20 to 9:55:35 am', 0, height * 0.93);
info.text('   acceleromter mounted on the finger.', 0, height * 0.97);

  let dataSize = Object.keys(data).length;
  layerX.fill(150); // dessiner nos formes avec un remplissage opaque
  layerX.noStroke();
  layerX.beginShape()
  push()
  for (let i = 0; i < dataSize; i++) {

    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r1 = map(data[i].x, -1, 1, 25, height * 0.45) // données de l'accéléromètre
    let x1 = width * 0.5 + r1 * cos(angle) // abscisse calculée par application de la formule
    let y1 = height * 0.4 + r1 * sin(angle) // ordonnée calculée par application de la formule
    layerX.vertex(x1, y1)

  }
  layerX.endShape()
  pop()


  layerY.fill(150); // dessiner nos formes avec un remplissage opaque
  layerY.noStroke();
  layerY.beginShape()
  push()

  for (let i = 0; i < dataSize; i++) {



    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r2 = map(data[i].y, -1, 1, 25, height * 0.45) // données de l'accéléromètre
    let x2 = width * 0.5 + r2 * cos(angle) // abscisse calculée par application de la formule
    let y2 = height * 0.4 + r2 * sin(angle) // ordonnée calculée par application de la formule
    layerY.vertex(x2, y2)

  }
  layerY.endShape()
  pop()


  layerZ.fill(150); // dessiner nos formes avec un remplissage opaque
  layerZ.noStroke();
  layerZ.beginShape()
  push()

  for (let i = 0; i < dataSize; i++) {

    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let r3 = map(data[i].z, -1, 1, 25, height * 0.45) // données de l'accéléromètre
    let x3 = width * 0.5 + r3 * cos(angle) // abscisse calculée par application de la formule
    let y3 = height * 0.4 + r3 * sin(angle) // ordonnée calculée par application de la formule
    layerZ.vertex(x3, y3)
  }

  layerZ.endShape()

  pop()



  





  back.cutout(layerX)
  back.cutout(layerY)
  back.cutout(layerZ)
  back.cutout(info)
  
  
}

function mouseClicked() {
  exportRiso();
}