let agents, lifeSpan, stepSize, agentSize, noiseScale, bristleCount, brushSize, slices

function setup() {
  createCanvas(500, 500)

  agents = []
  agentSize = 1
  lifeSpan = 100
  bristleCount = 5
  brushSize = 10

  slices = 3

  noiseScale = random(0.001, 0.05)
  stepSize = random(0.1, 1)

  background(0)

  noStroke()
}


function draw() {
  background(0, 5)
  translate(width / 2, height / 2)
  update()

  if (mouseIsPressed) {
    for(let j = 0; j < bristleCount; j += 1) {
      agents.push({
        x: (mouseX -  width / 2  ) + random(-brushSize, brushSize),
        y: (mouseY -  height / 2 ) + random(-brushSize, brushSize),
        age: 0
      })
    }
  }

  for(let i = 0; i < agents.length; i += 1) {
    fill(255, map(agents[i].age, 0, lifeSpan, 100, 0))
    push()
    for(let r = 0; r < slices; r += 1) {
      rotate(radians(360 / slices))
      rect(agents[i].x, agents[i].y, agentSize, agentSize)
    }
    pop()
  }

  for(let i = agents.length - 1; i >= 0; i -= 1) {
    if(agents[i].age > lifeSpan) {
      agents.splice(i, 1)
    }
  }
}

function update() {
  for(let i = 0; i < agents.length; i += 1) {
    noiseScale = random(0.001, 0.15)
    stepSize = random(0.1, 1)
    let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * TWO_PI

    agents[i].x += sin(angle) * stepSize
    agents[i].y += cos(angle) * stepSize
    agents[i].age += 1
  }
}
