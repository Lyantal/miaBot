module.exports = {
    name: 'diceRoller',
    description: "Roll some dice",
    execute(message, args){
        var response = [Math.floor(Math.random() * ((6 - 1) + 1) + 1)];

        message.channel.send(response).then().catch(console.error);
    }
}