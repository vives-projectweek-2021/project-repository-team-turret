const turretAngle = document.getElementById("turret-angle")

let angle = 0
const ENTER = 13
const ARROW_RIGHT = 39
const ARROW_LEFT = 37
const ARROW_UP = 38
const ARROW_DOWN = 40

window.onload = function(){
    
    window.onkeydown= function(gfg){
        if(gfg.keyCode === ARROW_RIGHT && isValidAngle(1)){
            changeAngle(1)
        };
        if(gfg.keyCode === ARROW_LEFT && isValidAngle(-1))
        {
            changeAngle(-1)
        };
        if(gfg.keyCode === ENTER){
            formatWsMsg("movement/fire", "1")
        };
        if(gfg.keyCode === ARROW_UP){
            powerSlider.value = Number(powerSlider.value) + 100
            changePower(powerSlider.value)
        }
        if(gfg.keyCode === ARROW_DOWN){
            powerSlider.value = Number(powerSlider.value) - 100
            changePower(powerSlider.value)
        }
    };

}

function isValidAngle(delta) {
    angle = Number(turretAngle.innerHTML.slice(0, -1))
    return !(Math.abs(angle + delta) > 20)
}

function changeAngle(delta) {
    angle += delta
    turretAngle.innerHTML = angle + '°';
    formatWsMsg("movement/vertical", String(angle))
}

function changePower(power) {
    formatWsMsg("movement/left-motor", power)
    formatWsMsg("movement/right-motor", power)
}
