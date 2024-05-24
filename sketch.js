function setup() {
    createCanvas(1000, 660);
     background("grey");
  }
  
  
  function draw() {
    
    stroke ("black");
    strokeWeight(5)
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      point(mouseX, mouseY);
    }
  }