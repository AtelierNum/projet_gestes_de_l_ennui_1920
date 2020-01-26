
let data

let back
let info

let layerFsr
let layerPzo
let layerLum

let img




// permet de précharger des fichiers (comme nos données ou éventuellement des images)
function preload() {
     data = loadJSON("data4.json", function () {
      console.log("done")
      console.log(Object.keys(data).length) // nombre d'entrées
      console.log(data[0].fsr) // première entrée de notre fichier
      console.log(data[0].timestamp) // timestamp du premier point enregistré
      //console.log(data[1].x) // valeur "x" du deuxième point enregistré
    })

    img = loadImage("img8.png");
}

// fonction exécutée une seule fois au démarrage de notre programme
function setup() {
  createCanvas(windowHeight, windowHeight); // on crée un espace de dessin <=> size()
  pixelDensity(1) // nécessaire pour la bibliothèque riso
  background(0)

  layerFsr = new Riso('yellow');
  layerPzo = new Riso('mint');
  layerLum = new Riso('bubblegum');
  back = new Riso('black');
  info = new Riso('white')
}

function draw() {
  background(255);
  
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer => nous allons écrire notre code dans cette fonction
  drawRiso(); // display the layers drawn previously
}

function drawViz() {



    let dataSize = Object.keys(data).length;


    info.fill(255)
    info.noStroke()
    info.imageMode(CORNER)
    let imgRatio = height * 0.2
    info.image(img, width - imgRatio, height - imgRatio, imgRatio, imgRatio);

    
// COUCHE CAPTEUR FORCE
    
layerFsr.fill(255) // dessiner nos formes avec un remplissage opaque
layerFsr.noStroke()
layerFsr.beginShape()



for (let i = 0; i < dataSize; i++) {

  let dat1 = data[i]
    let FSR = dat1.fsr;
    
    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.

    let r = map(FSR, 0, 1000, 25, height * 0.40) // données de l'accéléromètre
    let x = width * 0.5 + r * cos(angle) // abscisse calculée par application de la formule
    let y = height * 0.4 + r * sin(angle) // ordonnée calculée par application de la formule
    layerFsr.curveVertex(x, y)

}
layerFsr.endShape(CLOSE);


// COUCHE CAPTEUR PIEZO

layerPzo.fill(255)
layerPzo.noStroke()
layerPzo.beginShape()

for (let i = 0; i < dataSize; i++) {

  let dat2 = data[i]
  let PZO = dat2.pzo;

  let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.

let r = map(PZO, 0, 250, 25, height * 0.32) // données de l'accéléromètre
let x = width * 0.5 + r * cos(angle) // abscisse calculée par application de la formule
let y = height * 0.4 + r * sin(angle) // ordonnée calculée par application de la formule
layerPzo.curveVertex(x, y)

}
layerPzo.endShape(CLOSE);


// COUCHE CAPTEUR LUMIERE

layerLum.fill(255)
layerLum.noStroke()
layerLum.beginShape()

for (let i = 0; i < dataSize; i++) {

  let dat3 = data[i]
  let LUM = dat3.lum;

  let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.

let r = map(LUM, 600, 0, 25, height * 0.40) // données de l'accéléromètre
let x = width * 0.5 + r * cos(angle) // abscisse calculée par application de la formule
let y = height * 0.4 + r * sin(angle) // ordonnée calculée par application de la formule
layerLum.curveVertex(x, y)
}
layerLum.endShape(CLOSE);

back.fill(255)
back.rect(0,0,width,height)

//CARTEL

info.stroke(255);
info.strokeWeight(3);
info.line(0, height * 0.8, width, height * 0.8);

info.noStroke();
info.fill(255);
info.textStyle(BOLD);
info.textFont('Arial');
info.textAlign(LEFT, CENTER);
info.textSize(36);
info.text(' "Lazy boy" - Patterns ', 0, height * 0.83);
info.text('   Pierre + Ingrid', 0, height * 0.87);

info.textSize(20);
info.textStyle(ITALIC);
info.text('   6th of January 2020 from 9:47:13 to 9:50:48 am', 0, height * 0.93);
info.text('   Tapping on the table, sleepy head & looking at a watch.', 0, height * 0.96);


//LEGENDES

layerFsr.textSize(12);
layerFsr.textStyle(BOLD);
layerFsr.text('HEAD', 585, height * 0.84)

layerPzo.textSize(12);
layerPzo.textStyle(BOLD);
layerPzo.text('FINGER', 525, height * 0.99)

layerLum.textSize(12);
layerLum.textStyle(BOLD);
layerLum.text('WATCH', 675, height * 0.97)
    
//CUTOUT

back.cutout(layerFsr)
back.cutout(layerPzo)
back.cutout(layerLum)
back.cutout(info)





    }

   

    

// exporter nos fichiers pour le print lorsque nous appuyons sur la souris.
function mouseClicked() {
  exportRiso();
}