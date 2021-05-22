const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,ball26,ball27,ball28,ball29,ball30,ball31,ball32,ball33,ball234,ball35,ball36,ball37,ball38,ball39,ball40,ball41,ball42,ball43,ball44,

function setup(){
  

  createCanvas(500,500);
  
  engine=Engine.create();
  world=engine.world;
  var ground_options ={
    isStatic: true
  }
ground = Bodies.rectangle(1,490,400,20,ground_options);
  World.add(world,ground);
ball1 = new Balls(201,300,2,2);
ball2 = new Balls(202,100,2,2);
ball3 = new Balls(203,100,2,2);
ball4 = new Balls(204,300,2,2);
ball5 = new Balls(205,100,2,2);
ball6 = new Balls(206,100,2,2);

ball7 = new Balls(207,300,2,2);
ball8 = new Balls(208,100,2,2);
ball9 = new Balls(209,100,2,2);

ball10 = new Balls(210,300,2,2);
ball11 = new Balls(211,100,2,2);
ball12 = new Balls(212,100,2,2);

ball13 = new Balls(214,300,2,2);
ball14 = new Balls(216,100,2,2);
ball15= new Balls(218,100,2,2);

ball16= new Balls(220,300,2,2);
ball17= new Balls(222,100,2,2);
ball18= new Balls(224,100,2,2);

ball19= new Balls(226,300,2,2);
ball20= new Balls(202,100,2,2);
ball21= new Balls(228,100,2,2);

ball22= new Balls(230,300,2,2);
ball23= new Balls(232,100,2,2);
ball24= new Balls(234,100,2,2);

ball25= new Balls(236,300,2,2);
ball26= new Balls(238,100,2,2);
ball27= new Balls(240,100,2,2);

ball28 = new Balls(243,300,2,2);
ball29 = new Balls(247,100,2,2);
ball30 = new Balls(250,100,2,2);


ball31 = new Balls(252,300,2,2);
ball32 = new Balls(254,100,2,2);
ball33 = new Balls(256,100,2,2);

ball34 = new Balls(258,300,2,2);
ball35= new Balls(260,100,2,2);
ball36= new Balls(262,100,2,2);

ball37= new Balls(264,300,2,2);
ball38= new Balls(266,100,2,2);


ball39= new Balls(270,300,2,2);
ball40 = new Balls(273,100,2,2);
ball41 = new Balls(278,100,2,2);

ball42 = new Balls(300,300,2,2);
ball43 = new Balls(302,100,2,2);
ball44= new Balls(304,100,2,2);


}


function draw() {
 
  background(255,180,250);
  Engine.update(engine);
  fill("red");
  rect(ground.position.x,ground.position.y,800,20);
  rectMode(CENTER);
 
  ball1.display();
  ball2.display();
  ball3.display();

  ball4.display();
ball5.display();
ball6.display();

ball7.display();
ball8.display();
ball9.display(); 

ball10.display(); 
ball11.display();
ball12 .display();

ball13.display();
ball14 .display();
ball15.display();

ball16.display();
ball17.display();
ball18.display();
ball19.display();
ball20.display();
ball21.display();

ball22.display();
ball23.display();
ball24.display();

ball25.display();
ball26.display();
ball27.display();

ball28 .display();
ball29 .display();
ball30.display();


ball31 .display();
ball32 .display();
ball33.display();

ball34.display();
ball35.display();
ball36.display();

ball37.display();
ball38.display();


ball39.display();
ball40 .display();
ball41 .display();
ball42.display();
ball43.display(); 
ball44.display();


  


}