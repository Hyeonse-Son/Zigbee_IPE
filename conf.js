let conf = {};
let cse = {};
let ae = {};
let zigbee = {};
let api_key = {};

//cse config
cse.host = "127.0.0.1";
cse.port = "7579"
cse.name = "Mobius"
cse.id = "/Mobius.js"
cse.mqttport = "1883";

//ae config
ae.name = "zigbee_smarthome";
ae.id = "S" + ae.name;
ae.parent = "/" + cse.name;
ae.appid = "zigbee"

zigbee.host = "192.168.0.122"
zigbee.api_key = "0C894FF2A2"

conf.cse = cse;
conf.ae = ae;
conf.zigbee = zigbee;
conf.api_key = api_key;

module.exports = conf;
