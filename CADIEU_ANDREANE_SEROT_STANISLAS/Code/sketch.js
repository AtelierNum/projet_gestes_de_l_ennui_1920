let layerX;
let layerY;
let info;
let back;
let img;

let data
let dataSize

function preload() {
  data = loadJSON("data.json", function () {
    console.log("done")
    console.log(Object.keys(data).length)
    console.log(data[0])
    console.log(data[0].timestamp)
    console.log(data[1].piezo)
  })
  img = loadImage("stylo4.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)

  layerX = new Riso('burgundy');
  layerY = new Riso('green');

  info = new Riso('white')
  back = new Riso('black')

}

function draw() {
  background(245);

  clearRiso(); 
  drawViz(); 
  drawRiso();
}

function drawViz() {
  console.log("drawing")
  dataSize = Object.keys(data).length
  
  back.fill(255)
  back.rect(0,0,width,height)

  
  info.fill(255)
  info.noStroke()
  info.imageMode(CORNER)
  let imgRatio = height * 0.2
  info.image(img, width - imgRatio *0.4, height - imgRatio *0.45);
  
  layerX.beginShape()
  layerX.fill(255);
  for (let i = 0; i < dataSize; i++) {
    let r = map(data[i].piezo, 0, 1024, 25, height * 0.65)
    let angle = map(i, 0, dataSize, 0, TWO_PI)
    let x = width * 0.5 + r * cos(angle)
    let y = height * 0.4 + r * sin(angle)
    layerX.curveVertex(x, y)

    
  }
  
  layerX.endShape(CLOSE)
  
  layerX.textStyle(BOLD);
  layerX.textFont('Arial');
  layerX.textAlign(RIGHT, CENTER);
  layerX.textSize(20);
  layerX.text("pressure", width - imgRatio *0.1, height - imgRatio *0.65  )
  layerX.text("0-1024", width - imgRatio *0.1, height - imgRatio *0.55  )

  layerY.beginShape()
  layerY.fill(255);
  for (let i = 0; i < dataSize; i++) {
    let r = map(data[i].switch, 0, 1, 25, height * 0.35)
    let angle = map(i, 0, dataSize, 0, TWO_PI)
    let x = width * 0.5 + r * cos(angle)
    let y = height * 0.4 + r * sin(angle)
    layerY.vertex(x, y)
  }
  layerY.endShape(CLOSE)
  layerY.textStyle(BOLD);
  layerY.textFont('Arial');
  layerY.textAlign(RIGHT, BOTTOM);
  layerY.textSize(20);
  layerY.text("click", width  - imgRatio *0.1, height - imgRatio *0.85 )
  layerY.text("0-1", width  - imgRatio *0.1, height - imgRatio *0.75)

  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);

  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT, CENTER);
  info.textSize(36);
  info.text('  "Click" Patterns -', 0, height * 0.83);
  info.text('  Stane', 0, height * 0.87);
  info.textSize(20);
  info.textStyle(ITALIC);
  info.text('   16 of December 2019 from 12:46:40 to 12:46:52 am', 0, height * 0.93);
  info.text('   Piezo and Switch mounted on the bottom of a pen.', 0, height * 0.96);

  back.cutout(layerX)
  back.cutout(layerY)
  
  back.cutout(info)

}
function mouseClicked() {
  exportRiso();
}