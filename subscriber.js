var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.115',{
    rejectUnauthorized: false
})

client.on('connect', function () {
    client.subscribe('myTopic')
})

client.on('message', function (topic, message) {
	context = message.toString();
	console.log(context)
})