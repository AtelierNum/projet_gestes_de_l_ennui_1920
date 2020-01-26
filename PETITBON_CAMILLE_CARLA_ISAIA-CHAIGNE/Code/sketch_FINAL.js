let data01
let data02
let data03
let datafin
let calqueinfo
let calquepression01
let calquepression02
let calquepression03
let calqueBack
let img


function preload() {

// charger l'image 
  img = loadImage("graphe.png");

  // charger le jeu de données 01
  data01 = loadJSON("PRESSION 01.json", function () {
    console.log("done")
    console.log(Object.keys(data01).length) // nombre d'entrées
    console.log(data01[0]) // première entrée de notre fichier
    console.log(data01[0].timestamp) // timestamp du premier point enregistré
    console.log(data01[1].pression) // valeur "x" du deuxième point enregistré

  })
    // Fin de charger le jeu de données 01

      // charger le jeu de données 02
  data02 = loadJSON("PRESSION 02.json", function () {
    console.log("done")
    console.log(Object.keys(data02).length) // nombre d'entrées
    console.log(data02[0]) // première entrée de notre fichier
    console.log(data02[0].timestamp) // timestamp du premier point enregistré
    console.log(data02[1].pression) // valeur "x" du deuxième point enregistré

  })
    // Fin de charger le jeu de données 02

      // charger le jeu de données 03
  data03 = loadJSON("PRESSION 03.json", function () {
    console.log("done")
    console.log(Object.keys(data01).length) // nombre d'entrées
    console.log(data03[0]) // première entrée de notre fichier
    console.log(data03[0].timestamp) // timestamp du premier point enregistré
    console.log(data03[1].pression) // valeur "x" du deuxième point enregistré

  })
    // Fin de charger le jeu de données 03

}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)
  calquepression01 = new Riso('cranberry'); // dessiner les formes sur un carque jaune
  calquepression02 = new Riso('red'); // dessiner les formes sur un calque rouge
  calquepression03 = new Riso('yellow'); // dessiner les formes sur un calque rouge

  calqueBack = new Riso('black') // fond noir
  calqueinfo = new Riso('white') // dessiner le cartel sur un calque blanc
}


// 
function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}
//


function drawViz() { // début du drawViz

  //------------------creation du cartel

 // placement de l image
  calqueinfo.fill(255)
  calqueinfo.noStroke()
  calqueinfo.imageMode(CORNER)
  let imgRatio = height * 0.2
  calqueinfo.image(img, width - imgRatio, height - imgRatio, imgRatio, imgRatio);

   // fin du placement de l image



    // legende du graphe
    // texte en blanc
    calqueinfo.textStyle(BOLD);
    calqueinfo.textFont('Arial');
    calqueinfo.textAlign(LEFT, CENTER);
    calqueinfo.textSize(15);
    calqueinfo.text("temps (s-1)", width - imgRatio, height - imgRatio *0.9)
    calqueinfo.textAlign(RIGHT, CENTER);
    calqueinfo.text("force (N)", width , height - imgRatio *0.6 )
    calqueinfo.textAlign(LEFT, BOTTOM);
    calqueinfo.textSize(15);
    calqueinfo.fill(255); // opacité de la forme (très opaque = 255 / transparente = 0)
    calqueinfo.text("Heure", width/1.06 - imgRatio , height / 1.16  ) // ecrire 01:00 sur le calque 01
    calqueinfo.stroke(255);
    // fin texte en blanc

    calquepression01.textStyle(BOLD);   // rose
    calquepression01.textFont('Arial');
    calquepression01.textAlign(LEFT, BOTTOM);
    calquepression01.textSize(15);
    calquepression01.fill(255); // opacité de la forme (très opaque = 255 / transparente = 0)
    calquepression01.text("01:00", width/1.06 - imgRatio , height / 1.13  ) // ecrire 01:00 sur le calque 01

    calquepression02.textStyle(BOLD);   // cranberry
    calquepression02.textFont('Arial');
    calquepression02.textAlign(LEFT, BOTTOM);
    calquepression02.textSize(15);
    calquepression02.fill(255); // opacité de la forme (très opaque = 255 / transparente = 0)
    calquepression02.text("02:00", width/1.06 - imgRatio , height / 1.1  )

    calquepression03.textStyle(BOLD);  // yellow
    calquepression03.textFont('Arial');
    calquepression03.textAlign(LEFT, BOTTOM);
    calquepression03.textSize(15);
    calquepression03.fill(255); // opacité de la forme (très opaque = 255 / transparente = 0)
   calquepression03.text("03:00", width/1.06 - imgRatio , height / 1.07  )
  // fin de la legende du graphe


  // création de la ligne et du texte
  calqueinfo.stroke(255);
  calqueinfo.strokeWeight(3);
  calqueinfo.line(0, height * 0.8, width, height * 0.8);

  calqueinfo.noStroke();
  calqueinfo.fill(255);
  calqueinfo.textStyle(BOLD);
  calqueinfo.textFont('Arial');
  calqueinfo.textAlign(LEFT, CENTER);
  calqueinfo.textSize(36);
  calqueinfo.text(' Gestes de l´ennui', 0, height * 0.83);
  calqueinfo.text(' Camille P. & Carla I.', 0, height * 0.87);

  calqueinfo.textSize(20);
  calqueinfo.textStyle(ITALIC);
  calqueinfo.text('  19 Janvier 2020 ', 0, height * 0.93);
  calqueinfo.text('  Tête lourde', 0, height * 0.96);
  // fin de la création de la ligne et du texte

  //------------------fin de la creation du cartel


  calqueBack.fill(255) // fond noir
  calqueBack.noStroke()
  calqueBack.rect(0, 0, width, height) // fond de forme carrée de longeur et largeur width et height

  let dataSize = Object.keys(data01).length;


  //------------------CREATION DES FORMES DU CALQUEPRESSION 01
  
  calquepression01.noStroke(); // enlever les contours de la forme

// début de la boucle for 1.1
  calquepression01.fill(255); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression01.beginShape(); // pour céer une forme pleine 1.1
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data01[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 7 + rad * cos(radians(angle)) // abscisse 
    let y = height / 7.1 + rad * sin(radians(angle)) // ordonnée 
    calquepression01.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression01.endShape(); // fin de la céation de la forme pleine 1.1
 // fin de la boucle for 1.1

// début de la boucle for 1.2
  calquepression01.fill(200); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression01.beginShape(); // pour céer une forme pleine 1.2
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data01[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 2.6 + rad * cos(radians(angle)) // abscisse 
    let y = height / 7.1 + rad * sin(radians(angle)) // ordonnée 
    calquepression01.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression01.endShape(); // fin de la céation de la forme pleine 1.2
  // fin de la boucle for 1.2

  // début de la boucle for 1.3
  calquepression01.fill(150); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression01.beginShape(); // pour céer une forme pleine 1.3
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data01[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 1.6 + rad * cos(radians(angle)) // abscisse 
    let y = height / 7.1 + rad * sin(radians(angle)) // ordonnée 
    calquepression01.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression01.endShape(); // fin de la céation de la forme pleine 1.3
  // fin de la boucle for 1.3

  // début de la boucle for 1.4
  calquepression01.fill(100); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression01.beginShape(); // pour céer une forme pleine 1.4
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data01[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 1.16 + rad * cos(radians(angle)) // abscisse 
    let y = height / 7.1 + rad * sin(radians(angle)) // ordonnée 
    calquepression01.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression01.endShape(); // fin de la céation de la forme pleine 1.4
  // fin de la boucle for 1.4
  //------------------FIN DE CREATION DES FORMES DU CALQUEPRESSION 01




  //------------------CREATION DES FORMES DU CALQUEPRESSION 02
  
  calquepression02.noStroke(); // enlever les contours de la forme

    // début de la boucle for 2.1
  calquepression02.fill(255); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression02.beginShape(); // pour céer une forme pleine 2.1
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data02[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 7 + rad * cos(radians(angle)) // abscisse 
    let y = height / 2.5 + rad * sin(radians(angle)) // ordonnée 
    calquepression02.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression02.endShape(); // fin de la céation de la forme pleine 2.1
  // fin de la boucle for 2.1
  
  // début de la boucle for 2.2
  calquepression02.fill(200); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression02.beginShape(); // pour céer une forme pleine 2.2
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data02[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 2.6 + rad * cos(radians(angle)) // abscisse 
    let y = height / 2.5 + rad * sin(radians(angle)) // ordonnée 
    calquepression02.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression02.endShape(); // fin de la céation de la forme pleine 2.2
  // fin de la boucle for 2.2

  // début de la boucle for 2.3
  calquepression02.fill(150); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression02.beginShape(); // pour céer une forme pleine 2.3
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data02[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 1.6 + rad * cos(radians(angle)) // abscisse 
    let y = height / 2.5 + rad * sin(radians(angle)) // ordonnée 
    calquepression02.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression02.endShape(); // fin de la céation de la forme pleine 2.3
  // fin de la boucle for 2.3

  // début de la boucle for 2.4
  calquepression02.fill(100); // opacité de la forme (très opaque = 255 / transparente = 0)
  calquepression02.beginShape(); // pour céer une forme pleine 2.4
  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
    let rad = map(data02[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
    // position du jeu de donnée sur le calque
    let x = width / 1.16 + rad * cos(radians(angle)) // abscisse 
    let y = height / 2.5 + rad * sin(radians(angle)) // ordonnée 
    calquepression02.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
  }
  calquepression02.endShape(); // fin de la céation de la forme pleine 2.4
  // fin de la boucle for 2.4
  
  //------------------FIN DE CREATION DES FORMES DU CALQUEPRESSION 02



    //------------------CREATION DES FORMES DU CALQUEPRESSION 03
    
    calquepression03.noStroke(); // enlever les contours de la forme

    // début de la boucle for 3.1
    calquepression03.fill(255); // opacité de la forme (très opaque = 255 / transparente = 0)
    calquepression03.beginShape(); // pour céer une forme pleine 3.1
    for (let i = 0; i < dataSize; i = i + 1) {
      let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
      let rad = map(data03[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
      // position du jeu de donnée sur le calque
      let x = width / 7 + rad * cos(radians(angle)) // abscisse 
      let y = height / 1.5 + rad * sin(radians(angle)) // ordonnée 
      calquepression03.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
    }
    calquepression03.endShape(); // fin de la céation de la forme pleine 3.1
    // fin de la boucle for 3.1

    // début de la boucle for 3.2
    calquepression03.fill(200); // opacité de la forme (très opaque = 255 / transparente = 0)

    calquepression03.beginShape(); // pour céer une forme pleine 3.2
    for (let i = 0; i < dataSize; i = i + 1) {
      let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
      let rad = map(data03[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
      // position du jeu de donnée sur le calque
      let x = width / 2.6 + rad * cos(radians(angle)) // abscisse 
      let y = height / 1.5 + rad * sin(radians(angle)) // ordonnée 
      calquepression03.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
    }
    calquepression03.endShape(); // fin de la céation de la forme pleine
    // fin de la boucle for 3.2

    // début de la boucle for 3.3
    calquepression03.fill(150); // opacité de la forme (très opaque = 255 / transparente = 0)

    calquepression03.beginShape(); // pour céer une forme pleine 3.3
    for (let i = 0; i < dataSize; i = i + 1) {
      let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
      let rad = map(data03[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
      // position du jeu de donnée sur le calque
      let x = width / 1.6 + rad * cos(radians(angle)) // abscisse 
      let y = height / 1.5 + rad * sin(radians(angle)) // ordonnée 
      calquepression03.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
    }
    calquepression03.endShape(); // fin de la céation de la forme pleine
    // fin de la boucle for 3.3

    // début de la boucle for 3.4
    calquepression03.fill(100); // opacité de la forme (très opaque = 255 / transparente = 0)
    calquepression03.beginShape(); // pour céer une forme pleine 3.4
    for (let i = 0; i < dataSize; i = i + 1) {
      let angle = map(i, 0, dataSize, 0, 360) // pour représenter les points de manière circulaire
      let rad = map(data03[i].pression, 0, 2624, 0, width * 0.3) // défini le rayon entre le centre 0 et le point de data
      // position du jeu de donnée sur le calque
      let x = width / 1.16 + rad * cos(radians(angle)) // abscisse 
      let y = height / 1.5 + rad * sin(radians(angle)) // ordonnée 
      calquepression03.curveVertex(x, y) // dessine les données sur le calque en x et y (défini au dessus)
    }
    calquepression03.endShape(); // fin de la céation de la forme pleine
    // fin de la boucle for 3.4
    //------------------FIN DE CREATION DES FORMES DU CALQUEPRESSION 03

// exportation des calques

  calqueBack.cutout(calquepression01)
  calqueBack.cutout(calquepression02)
  calqueBack.cutout(calquepression03)
  calqueBack.cutout(calqueinfo) // dessiner sur l'ecran
} // fin du drawViz

function mouseClicked() { // telecharger si clique
  exportRiso();
}
