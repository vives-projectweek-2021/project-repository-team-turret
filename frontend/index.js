const ws = new WebSocket("ws://localhost:3000")

ws.onopen = () => {
    console.log("Connected via websocket")
    ws.send(JSON.stringify({"message": "Client connected"}))
}

ws.onmessage = (message) => {
    console.log(message.data)
}

ws.onclose = (event) => {
    if (event.wasClean) {
      alert(`Lost connection to WebSocket, code=${event.code} reason=${event.reason}`)
    } else {
      alert('Lost connection to WebSocket')
    }
}


function formatWsMsg(topic, command) {
    ws.send(JSON.stringify({
        "topic": topic,
        "command": command
    }))
}

const fireBtn = document.getElementById("fire")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

const manualMode = document.getElementById("manual")
const halfAutoMode = document.getElementById("half-auto")
const autoMode = document.getElementById("auto")
const defenseMode = document.getElementById("defense")



fireBtn.addEventListener("click", () => {
    formatWsMsg("movement", "fire")
})

leftBtn.addEventListener("click", () => {
    formatWsMsg("movement", "left")
})

rightBtn.addEventListener("click", () => {
    formatWsMsg("movement", "right")
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