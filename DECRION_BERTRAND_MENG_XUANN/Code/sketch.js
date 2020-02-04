let data 
let layerX 
let layerY
let back
let info




imageMode(CENTER)

function preload() {
  data = loadJSON("data.json", function () {
    console.log("done")
    console.log(Object.keys(data).length) // nombre d'entrées
    console.log(data[0]) // première entrée de notre fichier
    console.log(data[0].timestamp) // timestamp du premier point enregistré
    console.log(data[1].luminosity) // valeur "x" du deuxième point enregistré
  })
  }

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)
  layerX = new Riso('green')
  back = new Riso('black')
  info = new Riso('white')
  //layerX.cutout(back)
  
  
}

function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
  
}

function drawViz() {

  back.fill(255)
  back.noStroke()
  back.rect(0,0,width,height)


  let dataSize = Object.keys(data).length


  layerX.fill(255); // dessiner nos formes avec un remplissage opaque
  layerX.beginShape();

  for (let i = 0; i < dataSize; i = i + 1 ) {
    
   let angle = map(i, 0, dataSize, 0, 360) // index du point.
   let rad = map(data[i].luminosity, 0, 1023, 1, height * 0.50) // données du capteur de luminosité
     
   let x = width * 0.5 + rad * cos(angle) // abscisse calculée par application de la formule
   let y = height * 0.4 + rad * sin(angle) // ordonnée calculée par application de la formule
    
   layerX.stroke(300)
   layerX.fill(0)
   //layerX.rect(x,y,15,15)
   layerX.curveVertex(x, y)
   }
   layerX.endShape();
 


  
info.fill(0)
info.noStroke()



// image à inserer


info.stroke(255)
info.strokeWeight(3)
info.line(0,height*0.77,width,height*0.77)
info.noStroke()
info.fill(255)
info.textStyle(BOLD)
info.textFont('Arial')
info.textAlign(LEFT,CENTER)
info.textSize(30)
info.text(' "Cant stop scrolling" Patterns -',0,height*0.81)
info.text(' Bertrand DECRION',0,height*0.88)
info.textSize(15)
info.textStyle(ITALIC)
info.text('  25 Novembre 2019 de 12-37-13 à 12-37-37 am',0,height*0.94)
info.text('  Capteur de luminosité fixé à la tête avec smartphone',0,height*0.98)


back.cutout(layerX)
back.cutout(info)
layerX.cutout(info)

}

 
function mouseClicked(){
  exportRiso()
}

