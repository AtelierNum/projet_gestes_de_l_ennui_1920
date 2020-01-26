let data
let info
let calqueForce;
let calque;
let calqueBack;
let img;

function preload() {
  data = loadJSON("mes_donnes.json", function () {
    console.log("done")
    console.log(Object.keys(data).length)
    console.log(data[0])
    console.log(data[0].timestamp)
    console.log(data[1].pression)
  })
  img = loadImage("schema.jpg", function () {
    console.log("done")
  })
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)
  //background(0);
  calqueForce = new Riso('yellow');
  calque = new Riso('red');
  calqueBack = new Riso('black');
  info = new Riso('white')

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

  for (let i = 0; i < dataSize; i = i + 1) {
    let angle = map(i, 0, dataSize, 0, 360)
    let rad = map(data[i].pression, 0, 1000, 0, width * 0.3)

    let x = width / 2 + rad * cos(radians(angle))
    let y = height / 2.5 + rad * sin(radians(angle)) 

    //let eSize
    calqueForce.stroke(150)
    calqueForce.fill(150)
    calqueForce.ellipse(x, y, 10, 10)
    calqueForce.line(x, y, 800, 0)
    
  }

  

  calque.beginShape();
  calque.noFill()
  for (let i = 0; i < dataSize; i = i + 1) {

    let rad = map(data[i].pression, 0, 1000, 0, width * 0.3)
    let angle = map(i, 0, dataSize, 0, 360)
    let x = width * 0.5 + rad * cos((angle))
    let y = height * 0.4 + rad * sin((angle))
    calque.curveVertex(x, y)
  }
  calque.endShape();
  info.fill(0)
  info.noStroke()
 
  info.imageMode(CORNER)
  //let imgRatio = height * 0.3
  info.image(img, width - img.width, height - img.height*1.2);
  info.imageMode(CORNER)
  
  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.77, width, height * 0.77);
  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT, CENTER);
  info.textSize(30);
  info.text('"Kicking your foot" Patterns -', 0, height * 0.82);
  info.text('  Myriam & Chloé', 0, height * 0.87);
  info.textSize(15);
  info.textStyle(ITALIC);
  info.text('   26 Novembre 2019 de 11-29-2 à 11-29-15 am', 0, height * 0.93);
  info.text('   Capteur de force avec la pression du pied', 0, height * 0.96);
  
  calqueBack.cutout(calqueForce)
  calqueBack.cutout(calque)
  calqueBack.cutout(info)
 
  calqueForce.cutout(info)
  calque.cutout(info)
}

function mouseClicked() {
  exportRiso();
}