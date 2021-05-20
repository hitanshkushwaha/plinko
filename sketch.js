const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
    var engine, world,bodies;
    var obstacle;
    var pole,pole1,pole2,pole3,pole4,pole5,pole6;
    







function setup() {
  createCanvas(410,500);
  
  engine = Engine.create();
  world = engine.world;

  var pole_options ={
    isStatic: true
}




var pole2_options ={
  isStatic: true
}

var pole3_options ={
  isStatic: true
}

var pole4_options ={
  isStatic: true
}

var pole5_options ={
  isStatic: true
}

var pole6_options ={
  isStatic: true
}





pole= Bodies.rectangle(200,490,10,10,pole_options);
World.add(world,pole);




pole2= Bodies.rectangle(400,380,10,200,pole2_options);
World.add(world,pole2);

pole3= Bodies.rectangle(300,380,10,200,pole3_options);
World.add(world,pole3);

pole4= Bodies.rectangle(200,380,10,200,pole4_options);
World.add(world,pole4);

pole5= Bodies.rectangle(100,380,10,200,pole5_options);
World.add(world,pole5);

pole6= Bodies.rectangle(00,380,10,200,pole6_options);
World.add(world,pole6);

obstacle=new Obstacle(200,200,5)

}

function draw() {
  background(255,255,255);  
 Engine.update(engine)
  rectMode(CENTER);
    rect(pole.position.x,pole.position.y,410,20);



    rect(pole2.position.x,pole2.position.y,10,200);
    rect(pole3.position.x,pole3.position.y,10,200);
    rect(pole4.position.x,pole4.position.y,10,200);
    rect(pole5.position.x,pole5.position.y,10,200);
    rect(pole6.position.x,pole6.position.y,10,200);


obstacle.display();


}