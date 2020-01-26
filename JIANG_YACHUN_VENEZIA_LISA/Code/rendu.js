let data
let layerTemp;
let layerButton;
let clearmedium;
let info;

let img


function preload() {
  data = loadJSON("Test-2.json", function () {
    console.log("done")
    console.log(Object.keys(data).length) // nombre d'entrées
    console.log(data[0]) // première entrée de notre fichier
    console.log(data[0].timestamp) // timestamp du premier point enregistré
    console.log(data[1].button) // valeur "button" du deuxième point enregistré
    console.log(data[1].temp) // valeur "temp" du deuxième point enregistré
  })

  img = loadImage("illu-pjs6.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)

  layerTemp = new Riso('yellow');
  layerButton = new Riso('red');
  layerButton2 = new Riso('blue');
  back = new Riso('clearmedium')
  info = new Riso('black')

  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);


}

function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}

function drawViz() {

  let dataSize = Object.keys(data).length
  back.fill(255)
  back.rect(0, 0, width, height)

  info.noStroke()
  info.imageMode(CORNER)
  let imgRatio = height * 0.2
  info.image(img, width - imgRatio/0.8, height - imgRatio, imgRatio, imgRatio);
  

  layerTemp.fill(255);
  for (let i = 0; i < dataSize; i++) {
    let r = height * 0.3


    let angle = map(i, 0, dataSize, 100, TWO_PI) // index du point.
    let x = width * 0.5 + r * cos(angle) // abscisse calculée par application de la formule
    let y = height * 0.4 + r * sin(angle) // ordonnée calculée par application de la formule
    if (data[i].temp > 490 && data[i].temp < 500 ) {


      layerTemp.line(width*0.5 , height*0.4 ,x, y)

    } else {
      layerTemp.line(width * 0.5, height * 0.4, x, y)
    }

  }

  
  layerButton.stroke(255)
  layerButton.noFill(255)
  for (let i = 0; i < dataSize; i++) {
    let r = height * 0.3

    let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
    let x = width * 0.5 + r * cos(angle) // abscisse calculée par application de la formule
    let y = height * 0.4+ r * sin(angle) // ordonnée calculée par application de la formule

    layerButton2.stroke(255)
    layerButton2.noFill(255)
    for (let i = 0; i < dataSize; i++) {
      let r = height * 0.3


      let angle = map(i, 0, dataSize, 0, TWO_PI) // index du point.
      let x = width * 0.5 + r * cos(angle) // abscisse calculée par application de la formule
      let y = height * 0.4 + r * sin(angle) // ordonnée calculée par application de la formule
    }


    //let u = width  + r*2 * sin(angle) // abscisse calculée par application de la formule
    //let q = height+ r*2 * sin(angle)
    if (data[i].button == 0) {

      layerButton.ellipse(x, y, 200, 40)
      layerButton2.ellipse(x, y, 40, 200)

      //layerButton.ellipse(u, q, 10,4)
      //layerButton.ellipse(width*0.5 , height*0.4 ,x, y)
    } else {
      //layerButton.ellipse(0, 0, x, y)


    }
  }

  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT, CENTER);
  info.textSize(36);
  info.text(' "La guerre des boutons" ', 0, height * 0.85);
  info.text('  Yachun & Lisa', 0, height * 0.90);

  info.textSize(20);
  info.textStyle(ITALIC);
  info.text('   1 decembre 2019, de 12:36:24 à 12:36:34', 0, height * 0.95);
  info.text('   Bouton pression de stylo.', 0, height * 0.98);
  back.cutout(layerButton2)
  back.cutout(layerButton)
  back.cutout(layerTemp)
  back.cutout(info)
  back.cutout(img)
}

function mouseClicked() {
  exportRiso();
}