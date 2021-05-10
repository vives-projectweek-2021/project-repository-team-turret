# Team Turret

![Team Turret img](./img/TeamTurretWhite.png)

## Team Members

- Wout Peirens
- Thomas Luca
- Tristan De Lil
- Jay D'Hulster

## Installation process

First clone this project with the following command:

```bash
git clone git@github.com:vives-projectweek-2021/project-repository-team-turret.git
```

This project contains some actions to run before you can operate the robot. The directories where you need to execute the programs are in brackets. We have two big parts in our project, the Raspberry Pi and the client-side.

### Raspberry Pi

You will need to track which IP-address the Raspberry Pi has. It is a dynamic IP-address so it will be different for each user. You can connect to this Raspberry Pi with SSH wich is enabled on the Pi. Next you will need to run some programs on the Raspberry Pi.

#### MQTT broker

To run the MQTT broker, you need to get access to the Raspberry Pi. Contact us for more info about passwords etc.
You need the following command to start the MQTT broker (/projects/project-repository-team-turret/...):

```bash

```

#### Camera stream

The camera also runs on the Raspberry Pi and will run with the following command (/projects):

```bash
sudo python3 rpi_camera_surveillance_system.py
```

Contact us for more info about the password.

#### Node-RED

Node-RED is a graphical simulation program to connect the MQTT requests with the PLC. You will need to run this with the following command (/projects/project-repository-team-turret):

```bash

```

#### Client MQTT

The backend for the client also runs on the Raspberry Pi and will run with the following commands (/projects/project-repository-team-turret/backend):

```bash
npm install
npm run start
```

### Client

You will need to change three files on the client-side. First you will need to create an `.env` file. There is an [.env.example](/backend/.env.example) file where you can find a template. Next you will need two IP-addresses. This IP-address of the Raspberry Pi you will need to place in the [websocket.js](/frontend/src/websocket.js). You will also change the IP-address in the [style.css](/frontend/styles/style.css) file. In these files you will see comments where you need to change the IP-address.

The only thing you need to run on the client-side is the webpage. This you can do with the following command (/frontend):

```bash
php -S localhost:8080
```

## Results

Our robot operates in two modi, manual and automatic. We control these modi from our webpage. For this, our PLC HMI screen needs to place in the modus Camera and needs to click on start.

### Manual

In the modus manual can you control the robot in two ways. The first one is by clicking on the camera view. The second way is by clicking on the left and right button. This will change the angle of the robot with one degree. You can also control the speed of the motors. You can change this between 0 and 2000 rpm (revolutions per minute) in steps of 200. With the big orange button you can fire a ball.

### Automatic

When you choose the option automatic, you can make a further choice in easy, middle or hard.

### Easy

In this option, the robot will TODO

### Middle

In this option, the robot will TODO

### Hard

In this option, the robot will TODO
