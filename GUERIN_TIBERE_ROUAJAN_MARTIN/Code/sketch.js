let data;
let layerFSR;
let layerFSR1;
let layerFSR2;
let back;
let info;
let img;
let img2;
let img3;
let img4;




function preload() {
  data = loadJSON("mes_donnes.json", function () {
    console.log("done");
    console.log(Object.keys(data).length); // nombre d'entrées
    console.log(data[0]); // première entrée de notre fichier
    console.log(data[0].timestamp); // timestamp du premier point enregistré
    console.log(data[1].x); // valeur "x" du deuxième point enregistré
    console.log(data[1].y);
    console.log(data[1].z);
  })
  img = loadImage("fleche1.png");
  img2 = loadImage("fleche2.png");
  img3 = loadImage("fleche3.png");
  img4 = loadImage("fleche4.png");


}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1);
  //background(0);

  info = new Riso('white');

  layerFSR = new Riso('fluorescentyellow');
  layerFSR.stroke(255);
  layerFSR.strokeWeight(2);
  layerFSR1 = new Riso('fluorescentred');
  layerFSR1.stroke(255);
  layerFSR1.strokeWeight(2);
  layerFSR2 = new Riso('aqua');
  layerFSR2.stroke(255);
  layerFSR2.strokeWeight(2);
  layerFSR3 = new Riso('aqua');
  layerFSR3.stroke(255);
  layerFSR3.strokeWeight(2);
  layerFSR4 = new Riso('fluorescentyellow');
  layerFSR4.stroke(255);
  layerFSR4.strokeWeight(2);
  layerFSR5 = new Riso('fluorescentred');
  layerFSR5.stroke(255);
  layerFSR5.strokeWeight(2);
  layerFSR6 = new Riso('white');
  layerFSR6.stroke(255);
  layerFSR6.strokeWeight(2);
  
  back = new Riso('black')
  info = new Riso('white')

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


layerFSR4.fill(255)


layerFSR3.noStroke()
info.imageMode(CORNER)
let imgRatio = height * 0.045
layerFSR3.image(img, width - imgRatio/0.13, height - imgRatio/0.27, imgRatio, height * 0.15); 

  
  layerFSR4.fill(255)
layerFSR4.noStroke()
info.imageMode(CORNER)
layerFSR4.image(img2, width - imgRatio/0.11, height - imgRatio/0.27, imgRatio, height * 0.15);

layerFSR5.fill(255)
layerFSR5.noStroke()
info.imageMode(CORNER)
layerFSR5.image(img3, width - imgRatio/0.16, height - imgRatio/0.27, imgRatio, height * 0.15);

layerFSR6.fill(255)
layerFSR6.noStroke()
info.imageMode(CORNER)
layerFSR6.image(img4, width - imgRatio/0.22, height - imgRatio/0.30, imgRatio/0.27, height * 0.10);



  let dataSize = Object.keys(data).length;
  layerFSR.stroke(255)

  for (let i = 0; i < dataSize; i = i + 1) {
    let dat = data[i];
    /*

    let angle = map(i, 0, dataSize, 0, 360);
    let rad = map(data[i].x, 0, 1024, 0, width * 0.4);
    let rad2 = map(data[i].timestamp, 0, 1024, 0, width * 0.4);

    let x1 = width / 2 + width * 0.3 * cos(radians(angle));
    let y1 = height / 2 + height * 0.3 * sin(radians(angle));

    let x = width / 2 + rad * cos(radians(angle));
    let y = height / 2 + rad * sin(radians(angle));

    layerFSR.stroke(255, 50);

    layerFSR2.strokeWeight(2);
    //layerFSR.fill(255, 50);
    //layerFSR.risoNoFill();
    risoNoFill();


    let ellipseS = map(dat.x, 0, 1024, 5, 100);
    layerFSR.ellipse(x1, y1, ellipseS, ellipseS)

    layerFSR.line(random(0,width), 0, 100, rad);*/

    let x1 = map(i, 0, dataSize, 0, width)
    let y1 = 0
    let x2 = x1
    let y2 = map(dat.x, 0, 1024, 1, height*0.8)
    layerFSR.line(x1,y1,x2,y2)





  }

  for (let i = 0; i < dataSize; i = i + 1) {
    let dat = data[i];
    /*

    let angle = map(i, 0, dataSize, 0, 360);
    let rad = map(dat.y, 0, 1024, 0, width * 0.4);

    let x1 = width / 2 + width * 0.3 * cos(radians(angle));
    let y1 = height / 2 + height * 0.3 * sin(radians(angle));

    let x = width / 2 + rad * cos(radians(angle));
    let y = height / 2 + rad * sin(radians(angle));

    layerFSR1.stroke(255, 50);

    layerFSR2.strokeWeight(2);
    //layerFSR1.fill(255, 50);
    //layerFSR.risoNoFill();
    risoNoFill();

    let ellipseS = map(dat.y, 0, 1024, 5, 100);
    layerFSR1.ellipse(x1, y1, ellipseS, ellipseS)

    layerFSR1.line(width * 0.5, height * 0.5, x, y);*/
    let x1 = map(i, 0, dataSize, 0, width)
    let y1 = height*0.4
    let x2 = x1
    let y2 = map(dat.y, 0, 1024, height*0.4, 0)
    let y3 = map(dat.y, 0, 1024, height*0.4, height*0.8)
    layerFSR1.line(x1,y1,x2,y2)
    layerFSR1.line(x1,y1,x2,y3)



  }

  for (let i = 0; i < dataSize; i = i + 1) {
    let dat = data[i];
    /*
    let angle = map(i, 0, dataSize, 0, 360);
    let rad = map(dat.z, 0, 1024, 0, width * 0.4);

    let x1 = width / 2 + width * 0.3 * cos(radians(angle));
    let y1 = height / 2 + height * 0.3 * sin(radians(angle));

    let x = width / 2 + rad * cos(radians(angle));
    let y = height / 2 + rad * sin(radians(angle));

    layerFSR2.stroke(255, 50);
    layerFSR2.strokeWeight(2);
    //layerFSR2.fill(255, 50);
    //layerFSR.risoNoFill();
    risoNoFill();

    let ellipseS = map(dat.z, 0, 1024, 5, 100);
    layerFSR2.ellipse(x1, y1, ellipseS, ellipseS)

    layerFSR2.line(width * 0.5, height * 0.5, x, y);*/
    let x1 = map(i, 0, dataSize, 0, width)
    let y1 = height*0.8
    let x2 = x1
    let y2 = map(dat.z, 0, 1024, height*0.8, 0)
    layerFSR2.line(x1,y1,x2,y2)


  }
  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);

  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT, CENTER);
  info.textSize(36);
  info.text('"Boring Scrolling Phoning"', 0, height * 0.83);
  info.text(' Patterns –  Martin R. – Tibere G.', 0, height * 0.87);
  info.textSize(20);
  info.textStyle(ITALIC);
  info.text('   21th of November 2019 from 12:41:20 to 12:41:39 am', 0, height * 0.93);
  info.text('   Pression captors mounted on the front of the phone.', 0, height * 0.96);

  back.cutout(layerFSR)
  back.cutout(layerFSR1)
  back.cutout(layerFSR2)

  back.cutout(layerFSR3)
  back.cutout(layerFSR4)
  back.cutout(layerFSR5)
  back.cutout(layerFSR6)


  back.cutout(info)


  info.line(0, height * 0.8, width, height * 0.8);


}

function mouseClicked() {
  exportRiso();
}