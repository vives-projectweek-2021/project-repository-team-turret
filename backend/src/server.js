const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const messageProcessor = require("./lib/messageProcessor.js")

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({server})


app.get('/', (request, response) => {
    response.send("Welcome using HTTP")
})

wss.on('connection', (wssClient) => {
    
    console.log('WebSocket connection...')
    
    wssClient.on('message', (message) => {
        messageProcessor.process(message)
    })
    
    wssClient.send(JSON.stringify( { message: 'welcome', value: "Welcome using WebSocket"}))
})
    

server.listen(3000, () => {
    console.log("Listening on port 3000")
})
