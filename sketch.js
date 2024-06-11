function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
    
  
    stroke("black");
    fill("yellow");
  
    //console.long(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 40);
    }
  }
  