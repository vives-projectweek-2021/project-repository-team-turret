const turretAngle = document.getElementById("turret-angle")

var angle = 0
const ENTER = 13
const ARROW_RIGHT = 39
const ARROW_LEFT = 37

window.onload = function(){
    

    window.onkeydown= function(gfg){
        if(gfg.keyCode === ARROW_RIGHT && isValidAngle(10)){
            changeAngle(10)
        };
        if(gfg.keyCode === ARROW_LEFT && isValidAngle(-10))
        {
            changeAngle(-10)
        };
        if(gfg.keyCode === ENTER){
            formatWsMsg("movement", "fire")
        }
    };
}

function isValidAngle(delta) {
    angle = Number(turretAngle.innerHTML.slice(0, -1))
    return !(Math.abs(angle + delta) > 90)
}

function changeAngle(delta) {
    angle += delta
    turretAngle.innerHTML = angle + '°';
    formatWsMsg("movement/vertical", String(angle))
}

