let data

let layerDist;
let layerBack;

let info;
let img;

function preload() {
  data = loadJSON("testflore.json", function () {
    console.log("done")
    console.log(Object.keys(data).length)
  })
  img = loadImage("oui.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)

  layerDist = new Riso('yellow');
  layerBack = new Riso('black');
  info = new Riso('white')
}

function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}

function drawViz() {

  layerBack.fill(255)
  layerBack.rect(0, 0, width, height)
  let dataSize = Object.keys(data).length

  for (let i = 0; i < dataSize; i = i + 1) {
    layerDist.noFill()
    layerDist.stroke(255)
    let x = map(i, 0, dataSize, 0, width)
    let rad = map(data[i].dist, 0, 2000, 0, 120)
    //et rad = 
    layerDist.ellipse(x, height * 0.4, rad, rad)
  }

  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);

info.noStroke();
info.fill(255);
info.textStyle(BOLD);
info.textFont('Arial');
info.textAlign(LEFT, CENTER);
info.textSize(34);
info.text('"Scroll" Patterns -', 0, height * 0.83);
info.text('Youssra & Flore', 0, height * 0.87);
info.textSize(18);
info.textStyle(ITALIC);
info.text('26 Novembre 2019 12h59', 0, height * 0.93);
info.text('Capteur de distance monté sur iphone', 0, height * 0.96);

info.fill(255)
info.noStroke()
info.imageMode(CORNER)
let imgRatio = height * 0.2
info.image(img, width - img.width*0.15, height - img.height*0.15, img.width*0.15, img.height*0.15);

  layerBack.cutout(layerDist)
  layerBack.cutout(info)

  
}

function mouseClicked() {
  exportRiso();
}