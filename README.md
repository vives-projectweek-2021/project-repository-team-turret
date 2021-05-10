# Team Turret

![Team Turret img](./img/TeamTurretWhite.png)

## Team Members

- Wout Peirens
- Thomas Luca
- Tristan De Lil
- Jay D'Hulster

## Instalation process

First clone this project with the following command:

```bash
git clone git@github.com:vives-projectweek-2021/project-repository-team-turret.git
```

This project contains some actions to run before you can operate the robot.

### Raspberry Pi

You will need to track wich IP-address the Raspberry Pi has. It is an dynamic IP-address so it will differs per user. You can connect to this Raspberry Pi with ssh wich is enabled on the Pi. Next you will need to run some programs on the Raspberry Pi.

#### MQTT broker

To run the MQTT broker, you need to make access to the Raspberry Pi. Contact us for more info about passwords etc.
You need the following command to start the MQTT broker (/projects/project-repository-team-turret/...):

```bash

```

#### Camera stream

The camera runs also on the Raspberry Pi and will run with the following command (/projects):

```bash
sudo python3 rpi_camera_surveillance_system.py
```

Contact us for more info about the password.

#### Node-RED

Node-RED is an graphical simulation program to connect the MQTT requests with the PLC. You will need to run this with the following command (/projects/project-repository-team-turret):

```bash

```

#### Client MQTT

The backend for the client runs also on the Raspberry Pi and will run with the following commands (/projects/project-repository-team-turret/backend):

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
