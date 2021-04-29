const mqttClient = require("./mqttClient.js")

function process(message) {

    const msg = JSON.parse(message)
    console.log(msg)

    if(!(msg.hasOwnProperty("topic") && msg.hasOwnProperty("command"))){
        console.log(`Invalid message ${msg}`)
    } else {
        const topic = msg["topic"]
        const command = msg["command"]

        mqttClient.publish(topic, command)
    }
}

exports.process = process;