function setup() {
  createCanvas(500, 400);
  noLoop();
}

function draw() {
colorMode(HSB,360,128,128,[100]);
back= color(120,128,64,100);
c1 = color(240,32,128,100);
c2 = color(240,32,128,100);
c3 = color(120,32,100,100);

background(back);
  for (let i=20;i<width;i=i+20){
    for (let j=20;j<height;j=j+20){
      noStroke();
      if(i<= 40){
      fill(c1);
      circle (i,j,20,20);
    }
      if (i>40){
      fill(c1);
      circle (i,j,20,20);
      fill(back);
      circle(i,j,10,10);
    }
      if (i>80){
        fill(c1);
        circle (i,j,20,20);
      fill(c3);
      circle(i,j,10,10);
    }
      if (i>120){
        fill(c1);
        circle (i,j,20,20);
      fill(255);
      circle(i,j,10,10);
      }
      if (i>160){
      fill(c3);
      circle(i,j,20,20);
      fill(255);
      circle(i,j,10,10);
    }
    
    if (i>200){
      fill(c3);
      circle(i,j,20,20);
      fill(c3);
      circle(i,j,10,10);
    }
    
    if (i>240){
      fill(c3);
      circle(i,j,20,20);
      fill(back);
      circle(i,j,10,10);
    }
    if (i>280){
      fill(c3);
      circle(i,j,20,20);
      fill(c1);
      circle(i,j,10,10);
    }
    
    if (i>320){
      fill(255);
      circle(i,j,20,20);
      fill(c1);
      circle(i,j,10,10);
    }
    
    if (i>360){
      fill(255);
      circle(i,j,20,20);
      fill(back);
      circle(i,j,10,10);
    }
    if (i>400){
      fill(255);
      circle(i,j,20,20);
      fill(c3);
      circle(i,j,10,10);
    }
    if (i>440){
      fill(255);
      circle(i,j,20,20);
      fill(255);
      circle(i,j,10,10);
    }
    
    
    }
  }
}
