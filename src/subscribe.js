const mqtt    = require('mqtt');
const MqttDataModel = require('../src/model/mqtt-model')
const enc = new TextDecoder("utf-8");
const UM_MINUTO = 60;
const CINCO_MINUTOS = 300;
const DEZ_MINUTOS = 600;
const QUINZE_MINUTOS = 900;
const TRINTA_MINUTOS = 1800;
const UMA_HORA = 3600;
const UM_DIA = 86400;

const con = mqtt.connect("mqtt://soldier.cloudmqtt.com",
                {clientId:"========= HEROKU ============",
                    username: 'bvqnjxaz', 
                    password: 'mRCgh4BPQqGw', 
                    port: 16418});

            con.on("error",    function(error) { console.log("Can't connect" + error); });
      
        
            if(!con.connected) {
                con.reconnect();
            }    
    
            setInterval(() => {
                con.subscribe('Remo/Gas')
                con.on('message', function (topic, message) {
                    console.log(topic)
                    console.log(enc.decode(message))
    
                    MqttDataModel.create({
                        "topic": topic,
                        "data": enc.decode(message)
                    });
                });
            }, DEZ_MINUTOS);
           
            setInterval(() => {
                con.subscribe('Remo/Temperature')
                con.on('message', function (topic, message) {
                    console.log(topic)
                    console.log(enc.decode(message))

                    MqttDataModel.create({
                        "topic": topic,
                        "data": enc.decode(message)
                    });
                });
            }, DEZ_MINUTOS);
            

            setInterval(() => {
                con.subscribe('Remo/Humity')
                con.on('message', function (topic, message) {
                    console.log(topic);
                    console.log(enc.decode(message));

                    MqttDataModel.create({
                        "topic": topic,
                        "data": enc.decode(message)
                    });
                });
            }, CINCO_MINUTOS);

            setInterval(() => {
                con.subscribe('Remo/SoilHumity')
                con.on('message', function (topic, message) {
                    console.log(topic);
                    console.log(enc.decode(message));

                    MqttDataModel.create({
                        "topic": topic,
                        "data": enc.decode(message)
                    });
                });
            }, CINCO_MINUTOS);
            
           // setInterval(() => {
                con.subscribe('Remo/Check');
                con.on('message', function (topic, message) {
                    console.log(topic)
                    console.log(enc.decode(message))

                    MqttDataModel.create({
                        "topic": topic,
                        "data": enc.decode(message)
                    });
                });
           // }, CINCO_MINUTOS);
            
    