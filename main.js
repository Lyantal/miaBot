const Discord = require('discord.js');

const client = new Discord.Client();

const fetch = require('isomorphic-fetch');

const prefix = '!';

const fs = require('fs');

client. commands = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('MiaBot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'help' || command == 'h'){
        if (args.length) {
            return message.channel.send('Invalid command');
        }

        client.commands.get('help').execute(message, args);
    }else if (command == 'feh' || command == 'f') {

        if (!args.length) {
            return message.channel.send('No hero info provided.');
        }
        else{
        client.commands.get('heroStats').execute(message, args);
        }
    } else if (command == 'd'|| command == 'roll' || command == 'r'){
        client.commands.get('diceRoller').execute(message, args);
    } else if (command == 'horny'){
        client.commands.get('horny').execute(message, args);
    } else if (command == 'gonow'){
        client.commands.get('goNOW').execute(message, args);
    } else if (command == 'mia'){
        client.commands.get('mia').execute(message, args);
    } else if (command == 'momma' || command == 'mama'){
        client.commands.get('mama').execute(message, args);
    } else if(command == 'submitarena'){ 
        if (!args.length) {
            return message.channel.send('No arena info provided.');
        }
        else{
            client.commands.get('submitArena').execute(message, args);
        }
    }else if(command == 'submitaa'){ 
        if (!args.length) {
            return message.channel.send('No AA info provided.');
        }
        else{
            client.commands.get('submitAA').execute(message, args);
        }
    }else if(command == 'submitar'){ 
        if (!args.length) {
            return message.channel.send('No AA info provided.');
        }
        else{
            client.commands.get('submitAR').execute(message, args);
        }
    }
    else{
    }


});

client.login('yourDiscordLogin');
