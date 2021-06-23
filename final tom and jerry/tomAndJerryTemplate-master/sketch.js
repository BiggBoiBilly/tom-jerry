var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;


function preload() {
    
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");


}

function setup(){
    canvas = createCanvas(1000,800);

    mouse = createSprite(100, 700);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.scale = 0.2;

    cat = createSprite(800, 700);
    cat.addAnimation("cat", catImg1);
    cat.scale = 0.2;


    
}

function draw() {

    background(bg);



    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

      
      
        cat.velocityX = 0;
        cat.addAnimation("cat2", catImg3);
        cat.changeAnimation("cat2");
        cat.y = 600;
        cat.x = 400;
        

        mouse.addAnimation("mouse2", mouseImg3);
        mouse.changeAnimation("mouse2");
        mouse.x = 200;
        mouse.y = 600;

    }









    drawSprites();

}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        cat.velocityX = -10;
    }

    cat.addAnimation("cat3", catImg2);
    cat.changeAnimation("cat3");

    mouse.addAnimation("mouse3", mouseImg2);
    mouse.changeAnimation("mouse3");


}




