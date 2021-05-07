const ws = new WebSocket("ws://172.16.102.12:3000")

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
