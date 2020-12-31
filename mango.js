class Mango{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.ellipse(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("black");
      this.image = loadImage("Pictures/mango.png");
      image(this.image,300,390,250,600);
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };