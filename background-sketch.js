let xPos, yPos, xR, yR
function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  background(255)
  fill(0)

}

function draw() {
  background(255, 50)
  xR = map(mouseX, 0, width, 50,  width * 2)
  yR = map(mouseY, 0, height, 50, height * 2)


  for(let i = 0; i < 50; i += 1) {
    for(let j = 0; j < 50; j += 1) {
      xPos = sin(i + frameCount * 0.005) * sin(j + frameCount * 0.001)  * xR
      yPos = cos(i + frameCount * 0.005) * cos(j + frameCount * 0.001) * yR
      rect(width / 2 + xPos, height / 2 + yPos, 3, 3)
    }
  }
}

function windowResized() {
  setup()
}
