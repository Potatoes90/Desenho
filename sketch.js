function setup() {
    createCanvas(600, 600);
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