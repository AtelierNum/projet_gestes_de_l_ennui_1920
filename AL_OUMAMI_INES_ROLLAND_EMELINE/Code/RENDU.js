let data
let layer1
let layer2
let layer3
let layer4
let back
let info
let img


function preload() {
  data = loadJSON("enreg2.json", function () {
    console.log("done")
    console.log(Object.keys(data).length); // nombre d'entrées
    console.log(data[0]); // première entrée de notre fichier
    console.log(data[0].timestamp); // timestamp du premier point enregistré
    // console.log(data[0].c1); // valeur "x" du deuxième point enregistré

  })
  img = loadImage("MAIN.png");

}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)
  background(0)
  layer1 = new Riso('fluorescentyellow ');
  layer2 = new Riso('blue');
  layer3 = new Riso('fluorescentorange');
  layer4 = new Riso('fluorescentgreen');
  back = new Riso('black')
  info = new Riso('white');

}

function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
  

}

function drawViz() {

  let dataSize = Object.keys(data).length;

  info.fill(255)
  info.noStroke()
  info.imageMode(CORNER)
  let imgRatio = height * 0.2
  info.image(img, width - imgRatio, height - imgRatio, imgRatio, imgRatio);


  
  layer1.noStroke()
  layer2.noStroke()
  layer3.noStroke()
  layer4.noStroke()
  layer1.fill(255)
  layer2.fill(255)
  layer3.fill(255)
  layer4.fill(255)

  layer1.beginShape();
  layer2.beginShape();
  layer3.beginShape();
  layer4.beginShape();

  for (let i = 0; i < dataSize; i++) {
    let dat = data[i]
    let doigt1 = dat.c1;
    let doigt2 = dat.c2;
    let doigt3 = dat.c3;
    let doigt4 = dat.c4;
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.

    let r1 = map(doigt1, 0, 1024, 0, height * 0.33) // données de l'accéléromètre
    let x1 = width * 0.5 + r1 * cos(angle) // abscisse calculée par application de la formule
    let y1 = height * 0.4 + r1 * sin(angle) // ordonnée calculée par application de la formule
    //layer1.curveVertex(x1, y1)
    layer1.ellipse(x1, y1,10,10)

    let r2 = map(doigt2, 0, 1024, 0, height * 0.33) // données de l'accéléromètre
    let x2 = width * 0.5 + r2 * cos(angle) // abscisse calculée par application de la formule
    let y2 = height * 0.4 + r2 * sin(angle) // ordonnée calculée par application de la formule
    //layer2.curveVertex(x2, y2)
    layer2.ellipse(x2, y2,12,12)

    let r3 = map(doigt3, 0, 1024, 0, height * 0.33) // données de l'accéléromètre
    let x3 = width * 0.5 + r3 * cos(angle) // abscisse calculée par application de la formule
    let y3 = height * 0.4 + r3 * sin(angle) // ordonnée calculée par application de la formule
    //layer3.curveVertex(x3, y3)
    layer3.ellipse(x3, y3,12,12)

    let r4 = map(doigt4, 0, 1024, 0, height * 0.33) // données de l'accéléromètre
    let x4 = width * 0.5 + r4 * cos(angle) // abscisse calculée par application de la formule
    let y4 = height * 0.4 + r4 * sin(angle) // ordonnée calculée par application de la formule
    layer4.ellipse(x4, y4,12,12)
  }
  layer1.endShape();
  layer2.endShape();
  layer3.endShape();
  layer4.endShape();

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
  info.text(' Positive energy -', 0, height * 0.83);
  info.text(' Inass et Émeline', 0, height * 0.87);

  info.textSize(20);
  info.textStyle(ITALIC);
  info.text('  25th of November 2019 from 12:38:08 to 12:38:11 am', 0, height * 0.93);
  info.text('  Finger tapping on force sensors.', 0, height * 0.96);
  
  layer1.ellipse(width - imgRatio + img.width*0.108 + 20, height - imgRatio + img.height*0.05, 8, 8)
  layer2.ellipse(width - imgRatio + img.width*0.133 + 25, height - imgRatio + img.height*0.045, 8, 8)
  layer3.ellipse(width - imgRatio + img.width*0.158 + 28, 5 +height - imgRatio + img.height*0.055, 8, 8)
  layer4.ellipse(width - imgRatio + img.width*0.184 + 32, 10 +height - imgRatio + img.height*0.073, 8, 8)

  back.cutout(layer1)
  back.cutout(layer2)
  back.cutout(layer3)
  back.cutout(layer4)

  back.cutout(info)

}


function mouseClicked() {
  exportRiso();
}

