let data
let calquevibration;
let calquevibration2
let calquevibration3
let calqueBack
let info
let img
  
let layerX;
let layerY;
let layerZ;

function preload() {
  data = loadJSON("Test_sur_capteur_haut_milieu_fort.json", function () {
    console.log("done")
    console.log(Object.keys(data).length) // nombre d'entrées
    console.log(data[0]) // première entrée de notre fichier
    console.log(data[0].timestamp) // timestamp du premier point enregistré
   console.log(data[1].vib1) // valeur "x" du deuxième point enregistré
  })
  img = loadImage("Schemafinal.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)

  calquevibration = new Riso('turquoise');
  calquevibration2 = new Riso('mint');
  calquevibration3 = new Riso('lightmauve');
  calqueBack = new Riso('black');
  info = new Riso('white')
  layerX = new Riso('mint');
  layerY = new Riso('turquoise');
  layerZ = new Riso('lightmauve');
}

function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously


}

function drawViz() {

  calqueBack.fill(255)
  calqueBack.noStroke()
  calqueBack.rect(0, 0, width, height)

  let dataSize = Object.keys(data).length;

  calquevibration3.fill(255);
  calquevibration.fill(150); // dessiner nos formes avec un remplissage opaque
  calquevibration2.fill(255);



  info.noStroke()
  layerX.fill(255)
  info.noStroke()
  layerY.fill(255)
  info.noStroke()
  layerZ.fill(255)

  info.noStroke()
  info.imageMode(CORNER)
  let imgRatio = height * 0.2
  info.image(img, width - imgRatio/0.8, height - imgRatio, imgRatio, imgRatio);
  


  for (let i = 0; i < dataSize; i = i + 1) {
   // console.log(i)
    // let rad = map(data[i].vib3, 0, 300, 25, height * 0.45) // données de l'accéléromètre
    // let angle = map(i, 0, dataSize, 0, 360) // index du point.
    // let x = width * 0.5 + rad * cos(radians(angle)) // abscisse calculée par application de la formule
    // let y = height * 0.4 + rad * sin(radians(angle)) // ordonnée calculée par application de la formule
    // calquevibration.ellipse(x, y, 10, 10)

    // let rad2 = map(data[i].vib2, 0, 300, 25, height * 0.45) // données de l'accéléromètre
    // let angle2 = map(i, 0, dataSize, 0, 360) // index du point.
    // let x2 = width * 0.5 + rad2 * cos(radians(angle)) // abscisse calculée par application de la formule
    // let y2 = height * 0.4 + rad2 * sin(radians(angle)) // ordonnée calculée par application de la formule
    // calquevibration2.ellipse(x2, y2, 10, 10)

    let x = map(i, 0, dataSize, 0, width)
    let rad1 = map(data[i].vib3, 0, 300, 0, height * 0.45);
    let rad2 = map(data[i].vib2, 0, 300, 0, height * 0.45);
    let rad3 = map(data[i].vib1, 0, 10000, 0, height * 0.45);
    calquevibration3.ellipse(x, height * 0.5, rad3, rad3)
    calquevibration.ellipse(x, height * 0.5, rad1, rad1)
    calquevibration2.ellipse(x, height * 0.5, rad2, rad2)
    


  }

  layerX.textStyle(BOLD);
  layerX.textFont('Arial');
  layerX.textAlign(RIGHT, BOTTOM);
  layerX.textSize(20);
  layerX.text("MOYEN", width - imgRatio/4 , height  )

  layerY.textStyle(BOLD);
  layerY.textFont('Arial');
  layerY.textAlign(RIGHT, CENTER);
  layerY.textSize(20);
  layerY.text("FORT", width , height - imgRatio *0.6 )

  layerZ.textStyle(BOLD);
  layerZ.textFont('Arial');
  layerZ.textAlign(LEFT, CENTER);
  layerZ.textSize(20);
  layerZ.text("FAIBLE", width - imgRatio/0.6, height - imgRatio *0.4)


  //création du cartel
  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);

  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT, CENTER);
  info.textSize(30);
  info.text(' Ennui au bout des ongles -', 0, height * 0.84);
  info.textSize(28);
  info.text(' Gwenola et Pierre', 0, height * 0.89);

  info.textSize(18);
  info.textStyle(ITALIC);
  info.text('   16 Janvier 2020 à 14h30  15:29:27 ', 0, height * 0.93);
  info.text('   Capteurs Piezo', 0, height * 0.96);
  // fin du cartel

  calqueBack.cutout(layerX)
  calqueBack.cutout(layerY)
  calqueBack.cutout(layerZ)

  calqueBack.cutout(calquevibration);
  calqueBack.cutout(calquevibration2);
  calqueBack.cutout(calquevibration3);
  calqueBack.cutout(info);
  //noLoop()
}






function mouseClicked() {
  exportRiso();
}