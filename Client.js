const Discord = require('discord.js') //Получается пиздец.
const fs = require("fs")

const intents = new Discord.Intents(32767);
const bot = new Discord.Client({ intents })

bot.login('')

require('./events/index.js')(bot);

bot.commands = new Discord.Collection()
bot.commands.any = [];

fs.readdirSync('./commands').forEach(module => {
  const commandFiles = fs.readdirSync(`./commands/${module}/`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${module}/${file}`);
    command.category = module;
    command.names.forEach(el => {
      bot.commands.set(el, command)
    });
    bot.commands.any.push(command)
  }
})

bot.on('message', async (msg) => {
  
}) 