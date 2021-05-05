const fireBtn = document.getElementById("fire")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const powerSlider = document.getElementById("power")

const manualMode = document.getElementById("manual")
const halfAutoMode = document.getElementById("half-auto")
const autoMode = document.getElementById("auto")
const defenseMode = document.getElementById("defense")

const coordsP = document.getElementById("coords")
const stream = document.getElementById("stream")

fireBtn.addEventListener("click", () => {
    formatWsMsg("movement/fire", "1")
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

powerSlider.oninput = () => {
    changePower(powerSlider.value)
}

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

stream.addEventListener("mousedown", (e) => {
    let rectangle = stream.getBoundingClientRect() 
    let x = e.clientX - rectangle.left;
    let y = Math.round(e.clientY - rectangle.top);
    let xRel = Math.round(x / rectangle.width * 180 -90)

    let coords = `X: ${xRel}, Y: ${y}`;
    coordsP.innerHTML = coords;

    formatWsMsg("movement/vertical", String(xRel))
})
