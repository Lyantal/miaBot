module.exports = {
    name: 'help',
    description: "Give commands.",
    execute(message, args){
        message.channel.send('Commands are: ');
        message.channel.send('1. Help for all commands; !h');
        message.channel.send('2. Hero info; !feh or !f followed by hero name. (In construction)');
        message.channel.send('3. Roll dice; !dice, !d, or !r');
    }
}