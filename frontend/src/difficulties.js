const hardMode = {
    interval: 4000,
    power: "2000"
}

const mediumMode = {
    interval: 6000,
    power: "1400"
}

const easyMode = {
    interval: 8000,
    power: "1000"
}



function changeMode(mode) {
    var gameLoop = setInterval(() => {
        if(gameMode === "manual"){
            formatWsMsg("movement/vertical", "0")
            changePower("0")
            clearInterval(gameLoop)
        }
        let direction = Math.floor(Math.random() * 40) - 20
        console.log(direction)
        changePower(mode.power)
        formatWsMsg("movement/vertical", String(direction))
        formatWsMsg("movement/fire", "1")
    }, mode.interval)
}