# Team Turret

![Team Turret img](./img/TeamTurretWhite.png)

## Installation process

First clone this project with the following command:

```bash
git clone git@github.com:vives-projectweek-2021/project-repository-team-turret.git
```

This project contains some actions to run before you can operate the robot. The directories where you need to execute the programs are in brackets. We have two big parts in our project, the Raspberry Pi and the client-side.

### Raspberry Pi

You will need to track which IP-address the Raspberry Pi has. It is a dynamic IP-address so it will be different for each user. You can connect to this Raspberry Pi with SSH wich is enabled on the Pi. Next you will need to run some programs on the Raspberry Pi.

#### MQTT broker

The MQTT broker should run on startup on the Raspberry Pi. If you want build your own broker, here are the steps we took to create ours:

1. Install Mosquitto

    ```bash
    sudo apt-get install mosquitto mosquitto-clients
    ```

2. Setup listeners for MQTT and websocket

    Make a config file `/etc/mosquitto/conf.d/myconfig.conf` and write the following

    ```txt
    persistence false

    # mqtt
    listener 1883
    protocol mqtt

    # websockets
    listener 9001
    protocol websockets
    ```

3. Create a user

    By doing this, the broker can regulate who can read and write messages.
    Run the following command:

    ```bash
    sudo mosquitto_passwd -c /etc/mosquitto/passwd <your username>
    ```

    This will prompt you to create a password for that specific user.

4. Create an access control list (ACL)

    This way, only clients who have the correct password can publish to a topic.
    Create the following file `/etc/mosquitto/acl` and write the following:

    ```txt
    # Allow anonymous access to the sys
    topic read $SYS/#

    # Allow anonymous to read tommys_blaster
    topic read tommys_blaster/#

    # Allow specific user to publish
    user <username>
    topic tommys_blaster/#
    ```

5. Add previous created ACL to the broker config

    Open the config file again `/etc/mosquitto/conf.d/myconfig.conf` and enter the following:

    ```text
    allow_anonymous true
    password_file /etc/mosquitto/passwd

    acl_file /etc/mosquitto/acl
    ```

6. Restart Mosquitto

    ```bash
    sudo service mosquitto restart
    ```

7. Run Mosquitto

    ```bash
    mosquitto -c /etc/mosquitto/mosquitto.conf
    ```

8. Make client subscribe to a topic

    ```bash
    mosquitto_sub -h localhost -t tommys_blaster/#
    ```

9. Publish with valid authentication

    ```bash
    mosquitto_pub -h localhost -t "tommys_blaster/test" -m "Client's first publish" -u "<username>" -P "<password>"
    ```

#### Camera stream

The camera also runs on the Raspberry Pi and will run with the following command (/projects):

```bash
sudo python3 rpi_camera_surveillance_system.py
```

We get this project from the following [website](https://picamera.readthedocs.io/en/latest/recipes2.html#web-streaming)

Contact us for more info about the password.

#### Node-RED

Node-RED is a graphical simulation program to connect the MQTT requests with the PLC. Install Node-RED:

```bash
npm install -g --unsafe-perm node-red
```

To interact with Siemens S7 PLC install:

```bash
node-red-contrib-s7
```

Run Node-RED

```bash
node-red
```

#### Backend

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

### Manual mode

In the modus manual can you control the robot in two ways. The first one is by clicking on the camera view. The second way is by clicking on the left and right button. This will change the angle of the robot with one degree. You can also control the speed of the motors. You can change this between 0 and 2000 rpm (revolutions per minute) in steps of 200. With the big orange button you can fire a ball.

### Automatic mode

When you choose the option automatic, you can make a further choice in easy, medium or hard.

### Easy mode

In this option, the robot will shoot on the lowest speed in the lowest interval of shooting.

### Medium mode

In this option, the robot will shoot in the middle speed in the middelst interval of shooting.

### Hard mode

In this option, the robot will shoot in the hardest speed in the fasted interval of shooting.

## Team Members

- [Wout Peirens](https://github.com/wout297)
- [Thomas Luca](https://github.com/ThomasLuca)
- [Tristan De Lil](https://github.com/TristanDeLil)
- [Jay D'Hulster](https://github.com/JayDHulster)

## Mentors

- [Nico De Witte](https://github.com/BioBoost)
- [Piet Cordemans](https://github.com/pcordemans)
- [Sille Van Landschoot](https://github.com/sillevl)
- [Franky Loret](https://github.com/frankyloret)
- [Jonas Lannoo](https://github.com/JonasLannoo)

## Movie

To presentate Team Turret, we have made a short introduction movie <!--[on Youtube](https...) -->
