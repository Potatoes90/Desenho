function setup() {
    createCanvas(1500, 650);
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