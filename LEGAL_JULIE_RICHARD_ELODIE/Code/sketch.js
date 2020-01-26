let dataF;
let dataTa;
let dataTo;
let layerForce;
let layerTap;
let layerTordu;
let back;


function preload() {
  dataF = loadJSON("force.json", function () {
    console.log("done");
    console.log(Object.keys(dataF).length); // nombre d'entrées
    console.log(dataF[0]); // première entrée de notre fichier
    console.log(dataF[0].timestamp); // timestamp du premier point enregistré
    console.log(dataF[0].force); // valeur "x" du deuxième point enregistré
  })

  dataTo = loadJSON("tordu.json", function () {
    console.log("done");
    console.log(Object.keys(dataTo).length); // nombre d'entrées
    console.log(dataTo[0]); // première entrée de notre fichier
    console.log(dataTo[0].timestamp); // timestamp du premier point enregistré
    console.log(dataTo[0].tordu); // valeur "x" du deuxième point enregistré
  })

  dataTa = loadJSON("tap.json", function () {
    console.log("done");
    console.log(Object.keys(dataTa).length); // nombre d'entrées
    console.log(dataTa[0]); // première entrée de notre fichier
    console.log(dataTa[0].timestamp); // timestamp du premier point enregistré
    console.log(dataTa[0].tap); // valeur "x" du deuxième point enregistré
  })
  
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1);
  //background(0);

  layerForce = new Riso('purple'); 
  layerTap = new Riso('blue');
  layerTordu = new Riso ('green');
  back = new Riso('black');
  info = new Riso('white');
}

function draw() {

  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}

function drawViz() {

  
  let dataSizeF = Object.keys(dataF).length;

   for (let i = 1000 ; i < dataSizeF ; i = i+1){
      let datF = dataF[i];
      
      let angle = map(i, 1000, dataSizeF, 0, 360 );
      let rad = map(datF.force, 0, 400, 0, width );

      let x = width/2 + rad * cos(radians(angle));
      let y = height*0.4 + rad * sin(radians(angle));

      layerForce.stroke(255, 50);
      layerForce.noFill;

      layerForce.line(width*0.5, height*0.4, x, y);
    }
    layerForce.noStroke();
    layerForce.fill(255);
    layerForce.textStyle(BOLD);
    layerForce.textFont('Arial');
    layerForce.textAlign(LEFT, CENTER);
    layerForce.textSize(25);
    layerForce.text('DOIGTS', width * 0.8, height * 0.85);
    
  let dataSizeTo = Object.keys(dataTo).length;

   for (let i = 1000 ; i < dataSizeTo ; i = i+1){
      let datTo = dataTo[i];
      
      let angle = map(i, 1000, dataSizeTo, 0, 360 );
      let rad = map(datTo.tordu, 0, 400,0, width*0.3 );

      let x = width/2 + rad * cos(radians(angle));
      let y = height*0.4 + rad * sin(radians(angle));

      layerTordu.stroke(255, 50);
      layerTordu.noFill;

      layerTordu.line(width*0.5, height*0.4, x, y);
    }
    layerTordu.noStroke();
    layerTordu.fill(255);
    layerTordu.textStyle(BOLD);
    layerTordu.textFont('Arial');
    layerTordu.textAlign(LEFT, CENTER);
    layerTordu.textSize(25);
    layerTordu.text('CHEVEUX', width * 0.8, height * 0.95);

  let dataSizeTa = Object.keys(dataTa).length;

    for (let i = 0 ; i < dataSizeTa ; i = i+1){
      let datTa = dataTa[i];
    
      let angle = map(i, 0, dataSizeTa, 0, 360 );
      let rad = map(datTa.tap, 0, 400,0, width*0.4 );

      let x1 = width/2 + width*0.37 * cos(radians(angle));
      let y1 = height*0.4 + height*0.37 * sin(radians(angle));

      layerTap.noStroke;
      layerTap.fill(255);
    
      let ellipseS = map(datTa.tap, 0, 700, 5, 200 );
      layerTap.ellipse(x1,y1, ellipseS, ellipseS)
    }
    layerTap.textStyle(BOLD);
    layerTap.textFont('Arial');
    layerTap.textAlign(LEFT, CENTER);
    layerTap.textSize(25);
    layerTap.text('PAUME', width * 0.8, height * 0.9);
   
  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);


  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT, CENTER);
  info.textSize(36);
  info.text(' "Hhhhh" Moment -', 0, height * 0.83);
  info.text('  Julie LEGAL, Elodie RICHARD', 0, height * 0.87);
  info.textSize(20);
  info.textStyle(ITALIC);
  info.text('   22 novembre 2019, entre 9:47 et 9:50', 0, height * 0.92);
  info.text('   capteurs de force sous les doigts et dans la paume de la main', 0, height * 0.95);
  info.text('   capteur de flexion dans les cheveux', 0, height * 0.98);

  back.fill(255)
  back.rect(0,0,width,height);
  back.cutout(layerForce);
  back.cutout(layerTap);
  back.cutout(layerTordu);
  back.cutout(info);

}

function mouseClicked() {
  exportRiso();
}