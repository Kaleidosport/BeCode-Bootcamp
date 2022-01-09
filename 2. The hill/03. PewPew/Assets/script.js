const GAMEAREA = document.getElementById("game-area")
const CONTEXT = GAMEAREA.getContext("2d")

const AMMOS = []
const TARGETS = []

let turret = {
    x: GAMEAREA.width / 2,
    y: GAMEAREA.height - 70,
    dx: 10,
    dy: 10
}

function drawTurret() {
    CONTEXT.beginPath()
    CONTEXT.moveTo(turret.x, turret.y)
    CONTEXT.lineTo(turret.x + 28, turret.y + 56)
    CONTEXT.lineTo(turret.x - 28, turret.y + 56)
    CONTEXT.closePath()
    CONTEXT.fillStyle = "#04165d"
    CONTEXT.fill()
}

class Ammunition {
    constructor (x, y, radius, color, speed) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.speed = speed
    }

    draw() {
        CONTEXT.beginPath()
        CONTEXT.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        CONTEXT.fillStyle = this.color
        CONTEXT.fill()
    }

    adapt() {
        this.draw()
        this.y = this.y - this.speed
    }
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Target {
    constructor (y) {
        this.x = randInt(20, GAMEAREA.width - 20)
        this.y = y
        this.radius = randInt(20, 40)
        this.color = "#181714"
    }

    draw() {
        CONTEXT.beginPath()
        CONTEXT.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        CONTEXT.fillStyle = this.color
        CONTEXT.fill()
    }
}

TARGETS.push(new Target(100))

let score = 0
let playOn = false

document.getElementById("play").addEventListener("click", () => {
    document.getElementById("play").setAttribute("disabled", true)
    countdown = 35
    playOn = true

    setInterval(() => {
        countdown--
    }, 1000)

    loop()
})

function end() {
    document.getElementById("timer").innerHTML = "0"
    playOn = false
    GAMEAREA.style.display = "none"
    document.getElementById("game-status").innerHTML = `You shot down ${score} targets!`
    document.getElementById("play").style.display = "none"
}

function loop() {
    if (countdown === 0) end()

    if (playOn) {
        document.getElementById("timer").innerHTML = countdown
        CONTEXT.clearRect(0, 0, GAMEAREA.width, GAMEAREA.height)
        drawTurret()

        AMMOS.forEach((ammo) => {
            ammo.adapt()

            if (ammo.x >= TARGETS[0].x - TARGETS[0].radius && ammo.x <= TARGETS[0].x + TARGETS[0].radius 
                && ammo.y < 100 + TARGETS[0].radius && ammo.y > 100) {
                    TARGETS.pop()
                    TARGETS.push(new Target(100))
                    score++
                    document.getElementById("score").innerHTML = score
                }
        })

        TARGETS.forEach((t) => {
            t.draw()
        })

        requestAnimationFrame(loop)
    }
}

document.addEventListener("keydown", (element) => {
    if (element.key === "ArrowLeft") {
        turret.x -= turret.dx
        if (turret.x < 28) turret.x = 28
    }
    else if (element.key === "ArrowRight") {
        turret.x += turret.dx
        if (turret.x > GAMEAREA.width - 28) turret.x = GAMEAREA.width - 28
    }
    else if (element.key === " ") AMMOS.push(new Ammunition(turret.x, turret.y, 5, "#ffffff", 7))
})