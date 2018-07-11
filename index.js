const commando = require('discord.js-commando');
const Bot = new commando.Client();

Bot.registry.registerGroup('random', 'Random');
Bot.registry.registerDefaults();
Bot.registry.registerCommandsIn(__dirname + "/commands");


Bot.login('BOT_TOKEN');
