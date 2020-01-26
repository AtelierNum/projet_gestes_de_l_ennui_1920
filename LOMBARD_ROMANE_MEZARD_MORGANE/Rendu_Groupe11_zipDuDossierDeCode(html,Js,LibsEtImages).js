let data;
let layerFsr;
let layerY;
let layerZ;
let back;
let info;
let img;


function preload() {
  data = loadJSON("enreg.json", function () {
    console.log("done");
    console.log(Object.keys(data).length); // nombre d'entrées
    console.log(data[0]); // première entrée de notre fichier
    console.log(data[0].timestamp); // timestamp du premier point enregistré
    console.log(data[0].x); // valeur "x" du deuxième point enregistré
  })

  img = loadImage('axis.png');

}

function setup() {

  createCanvas(windowHeight, windowHeight);
  pixelDensity(1);
  //background(0);

  layerFSR = new Riso('yellow');
  layerY = new Riso('mint');
  layerZ = new Riso('blue');
  back = new Riso('black')

  // (...)
   info = new Riso('white')
   //(...)

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

  back.fill(255)
  back.rect(0, 0, width, height)

  info.fill(255)
  info.noStroke()
  info.imageMode(CORNER)
  let imgRatio = height * 0.2
  info.image(img, width - imgRatio, height - imgRatio, imgRatio, imgRatio);

  let dataSize = Object.keys(data).length;

  for (let i = 0; i < dataSize; i = i + 1) {
    let dat = data[i];

    let angle = map(i, 0, dataSize, 0, 360);
    let rad = map(dat.x, -300, 200, 0, width * 0.3);
    let x = width / 2 + rad * cos(radians(angle));
    let y = height *0.4 + rad * sin(radians(angle));

    //let scirclex = map(dat.x, -300, 300, 10, 50);
    //let scircley = map(dat.x, -300, 300, 10, 50);
    //let scirclez = map(dat.x, -300, 300, 10, 50);


    layerFSR.stroke(255,50);
   layerFSR.fill(255,50);
   //layerFSR.noFill();
   //layerFSR.strokeWeight(10);
   // layerFSR.line(width * 0.5, height * 0.5, x, y);
    layerFSR.ellipse( x, y, 20, 20);
    layerFSR.text('x',678,830);

    let rady = map(dat.y, -300, 300, 0, width * 0.3);
    let x1 = width / 2 + rady * cos(radians(angle));
    let y1 = height *0.4  + rady * sin(radians(angle));

    layerY.stroke(255,50);
    layerY.fill(255,50);
    //layerY.noFill();
    //layerY.strokeWeight(10);
    //layerY.line(width * 0.5, height * 0.5, x1, y1);
    layerY.ellipse(x1,y1, 20, 20);
    layerY.text('y',835,790);

    let radz = map(dat.z, -300, 300, 0, width * 0.3);
    let x2 = width / 2 + radz * cos(radians(angle));
    let y2 = height *0.4  + radz * sin(radians(angle));

    layerZ.stroke(255,50);
    layerZ.fill(255,50);
    //layerZ.noFill();
    //layerZ.strokeWeight(10);
   // layerZ.line(width * 0.5, height * 0.5, x2, y2);
    layerZ.ellipse(x2,y2, 20, 20);
    layerZ.text('z',750,685);


  }
  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);

  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT,CENTER);
  info.textSize(36);
  info.text('"Tortillons" – Patterns',20,height *0.83);
  info.text('Romane & Morgane', 40, height *0.87);

info.textSize(20);
info.textStyle(ITALIC);
info.text('   10 octobre 2019 from 10:52:51 to 9:52:08 ', 0, height * 0.93);
info.text('   Gyroscope accroché au bout de la mèche de cheveux.', 0, height * 0.96);

  back.cutout(layerFSR)
  back.cutout(layerY)
  back.cutout(layerZ)
 back.cutout(info)



}

function mouseClicked() {
  exportRiso();
}