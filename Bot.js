const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor (client) {
        super(client , {
            name : 'roll',
            group : 'random',
            memberName : 'roll',
            description : 'rolls the dice'
        });
    }
    async run(message , args) {
        var roll = Math.floor(Math.random()*6)+1;
        message.reply("you roll a : " + roll);

    }
}
module.exports = DiceRollCommand;
