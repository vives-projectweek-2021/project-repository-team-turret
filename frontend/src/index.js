const fireBtn = document.getElementById("fire")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const powerSlider = document.getElementById("power")

const coordsP = document.getElementById("coords")
const stream = document.getElementById("stream")

const manualButton = document.getElementById("manual")
const automaticButton = document.getElementById("automatic")

const easyButton = document.getElementById("easy-mode")
const mediumButton = document.getElementById("medium-mode")
const hardButton = document.getElementById("hard-mode")

/**
 * Change basic turret settings
 */

fireBtn.addEventListener("click", () => {
    formatWsMsg("movement/fire", "1")
})

leftBtn.addEventListener("click", () => {
    if(isValidAngle(-1)){
        changeAngle(-1)
    }
})

rightBtn.addEventListener("click", () => {
    if(isValidAngle(1)){
        changeAngle(1)
    }
})

powerSlider.oninput = () => {
    changePower(powerSlider.value)
}

/**
 * Get coordinates of click on stream
 */

stream.addEventListener("mousedown", (e) => {
    let rectangle = stream.getBoundingClientRect() 
    let x = e.clientX - rectangle.left;
    let y = Math.round(e.clientY - rectangle.top);
    let xRel = Math.round(x / rectangle.width * 40 - 20)

    let coords = `X: ${xRel}, Y: ${y}`;
    coordsP.innerHTML = coords;

    angle = xRel
    turretAngle.innerHTML = angle + '°';
    formatWsMsg("movement/vertical", String(xRel))
})

/**
 * Set styling of modus button
 */

const activeModeStyle = "background: #008779; border-color: #008779; color: white;"
const inactiveModeStyle = "background: white; border-color: #e0e0e0; color: black;"

let gameMode = "manual"

function setActive(active){
    automaticButton.style.cssText = (active === "manual") ? inactiveModeStyle : activeModeStyle
    manualButton.style.cssText = (active === "manual") ? activeModeStyle : inactiveModeStyle
    active = (active === "manual") ? "auto" : "manual"
}

let test = automaticButton.addEventListener("click", () => {
    gameMode = "auto"
    setActive(gameMode)
})

manualButton.addEventListener("click", () => {
    gameMode = "manual"
    setActive(gameMode)
})

setActive(gameMode)

/**
 * Set automatic modes
 */

easyButton.addEventListener("click", () => {
    changeMode(easyMode)
})

mediumButton.addEventListener("click", () => {
    changeMode(mediumMode)
})


hardButton.addEventListener("click", () => {
    changeMode(hardMode)
})

setActive("manual")

function updatePowerValue(val) {
    document.getElementById('powerValue').value=val; 
}
