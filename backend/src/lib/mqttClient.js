const mqtt = require('mqtt')
const mqttClient  = mqtt.connect(`mqtt://172.16.101.191`, {clientId:"commander"})

const baseTopic="tommys_blaster"
const topicListener = baseTopic + "/#"
mqttClient.subscribe(topicListener,{qos:1})

const options={
    retain: false,
    qos: 1,
}

mqttClient.on("connect",() => {	
    console.log("connected "+ mqttClient.connected)
    mqttClient.subscribe(`${baseTopic}/test`, (err) => {
        if (!err) {
            publish('test', 'Browser connected', options)
        }
    })
})

mqttClient.on('message', (topic, message, packet) => {
	console.log(topic + ": " + message)
})

//handle errors
mqttClient.on("error", (error) => {
    console.log("Can't connect" + error)
    process.exit(1)
})


function publish(topic,command){
    if (mqttClient.connected) {
        mqttClient.publish(`${baseTopic}/${topic}`, command, options)
    }
}

exports.publish = publish;
