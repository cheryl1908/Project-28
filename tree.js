class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      this.image = loadImage("Pictures/tree.png");
      image(this.image,600,390,250,300);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
