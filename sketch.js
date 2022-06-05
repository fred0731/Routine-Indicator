let img;
let X = 800, Y = 800;

let days, day_c;

//setup
function setup() {
  createCanvas(X,Y);
  img = loadImage('routine.jpg'); imageMode(CENTER);
  textStyle(BOLD);textAlign(CENTER);
  frameRate(5);
  
  //get day of the week
  switch (new Date().getDay()) {
  case 0:
    days = "일";
    day_c = color(240,30,30);
    break;
  case 1:
    days = "월";
    day_c = color(36,194,242);
    break;
  case 2:
    days = "화";
    day_c = color(124,21,21);
    break;
  case 3:
    days = "수";
    day_c = color(55,199,79);
    break;
  case 4:
    days = "목";
    day_c = color(129,20,156);
    break;
  case 5:
    days = "금";
    day_c = color(222,180,12);
    break;
  case 6:
    days = "토";
    day_c = color(8,123,240);
  }
}

//set size values as global
let tri_size = X/10;
let cir_size = X/3;

let tSize_1=X/23, tSize_2=X/15;
let tPosX = X/2, tPosY = Y/2.85;


//draw
function draw() {
  background(225);
  image(img,tPosX,height/2,X,Y);
  
  //indicate the date and time
  fill(255); ellipse(tPosX,tPosY*1.18,cir_size*1.3,cir_size*1.3);

  fill(20);textSize(tSize_1);
  let id_year = text(year()+"년\n",tPosX, tPosY*0.9);

  textSize(tSize_2);
  let id_date = text(month()+"월 "+day()+"일\n",tPosX,tPosY + tSize_1);
  
  fill(day_c);
  let id_dow = text(days + "요일\n",tPosX,tPosY + tSize_1 + tSize_2);
  
  fill(20);
  let id_time = text(hour() + ":" + nf(minute(),2,0) + ":" + nf(second(),2,0),tPosX, tPosY + tSize_1 + 2.5*tSize_2);
  //end
   
  cur_angle = get_time(); //f1
  arrow_render(0,0, cur_angle, tri_size); //f2
  
}


//f1
function get_time() {
  let time = hour()*60 + minute();
  //let time = second() + 1;
  let angle = map(time,0, 1440,-PI,PI);
  
  return angle;
}

//f2
function arrow_render(x1,y1,angle,size) {
  
  let cx = width/2 + cir_size * cos(angle);
  let cy = height/2.4 + cir_size * sin(angle);
  translate(cx,cy);
  
  new_angle = map(angle,-PI,PI,PI + HALF_PI,PI + HALF_PI + TWO_PI);
  rotate(new_angle);
  
  x2 = x1 + size*cos(PI + PI/3);
  y2 = y1 + size*sin(PI + PI/3);
  x3 = x1 + size*cos(PI + 2*PI/3);
  y3 = y1 + size*sin(PI + 2*PI/3);
  
  smooth();
  fill(random(150,250),random(50,70),random(50,80),180)
  noStroke();
  triangle(x1,y1,x2,y2,x3,y3);
  
  fill(225,40,40); textSize(width/33);  
  text(hour() + ":" + nf(minute(),2,0) + ":" + nf(second(),2,0), x1, y1 + 15);
  
}

