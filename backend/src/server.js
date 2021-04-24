const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const mqttClient = require("./lib/mqttClient.js")

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({server})


app.get('/', (request, response) => {
    response.send("Welcome using HTTP")
})

wss.on('connection', (wssClient) => {
    
    console.log('WebSocket connection...')
    
    wssClient.on('message', (message) => {
        const msg = JSON.parse(message)
        console.log(msg)
        if(msg.hasOwnProperty('topic') && msg.hasOwnProperty('command')){
            mqttClient.publish(msg.topic, msg.command)
        }
    })
    
    wssClient.send(JSON.stringify( { message: 'welcome', value: "Welcome using WebSocket"}))
})
    

server.listen(3000, () => {
    console.log("Listening on port 3000")
})
