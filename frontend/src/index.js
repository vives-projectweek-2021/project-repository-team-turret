const fireBtn = document.getElementById("fire")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const manualMode = document.getElementById("manual")
const halfAutoMode = document.getElementById("half-auto")
const autoMode = document.getElementById("auto")
const defenseMode = document.getElementById("defense")

const coordsP = document.getElementById("coords")
const stream = document.getElementById("stream")

fireBtn.addEventListener("click", () => {
    formatWsMsg("movement", "fire")
})

leftBtn.addEventListener("click", () => {
    if(isValidAngle(-10)){
        changeAngle(-10)
    }
})

rightBtn.addEventListener("click", () => {
    if(isValidAngle(10)){
        changeAngle(10)
    }
})

manualMode.addEventListener("click", () => {
    formatWsMsg("mode", "manual")
})

halfAutoMode.addEventListener("click", () => {
    formatWsMsg("mode", "half-auto")
})

autoMode.addEventListener("click", () => {
    formatWsMsg("mode", "auto")
})

defenseMode.addEventListener("click", () => {
    formatWsMsg("mode", "defense")
})

function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    
    const coords = "X coords: " + x + ", Y coords: " + y;
    coordsP.innerHTML = coords;
}