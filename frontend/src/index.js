const fireBtn = document.getElementById("fire")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const powerSlider = document.getElementById("power")

const coordsP = document.getElementById("coords")
const stream = document.getElementById("stream")

const manualButton = document.getElementById("manual")
const automaticButton = document.getElementById("automatic")

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


const activeModeStyle = "background: #008779; border-color: #008779; color: white;"
const inactiveModeStyle = "background: white; border-color: #e0e0e0; color: black;"

automaticButton.addEventListener("click", () => {
    automaticButton.style.cssText = activeModeStyle
    manualButton.style.cssText = inactiveModeStyle
})

manualButton.addEventListener("click", () => {
    manualButton.style.cssText = activeModeStyle
    automaticButton.style.cssText = inactiveModeStyle
})