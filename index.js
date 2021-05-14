const tmi = require('tmi.js');
const config = require('./config.json')
const commands = config.commands
const commandArray = []
const robot = require('robotjs');

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: [ config.channelname ]
});

client.connect();
console.log(commands)
for(const command in commands){
    commandArray.push(command)
}
client.on('message', (channel, tags, message, self) => {
  if(commandArray.includes(message.toLowerCase())){
      console.log(config.commands[message])
    robot.keyTap(config.commands[message])
  }
});