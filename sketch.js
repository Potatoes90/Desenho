function setup() {
    createCanvas(2000, 700);
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