module.exports = async (bot, msg) => {
    const Discord = require('discord.js')
    const { MessageEmbed, MessageButton, MessageSelectMenu, MessageActionRow } = require("discord.js")

    if (msg.author.bot) return
    const { content, author, guild } = msg
    const config = require('./config.json')

    if (content.slice(0, config.prefix.length) !== config.prefix) return

    const
        messageArray = content.split(' '),
        command = messageArray[0].replace(config.prefix, ""),
        args = messageArray.slice(1),
        //ergs1 = msg.content.slice(id.length).split(/ +/),
        messageArrayFull = content.split(' '),
        argsF = messageArrayFull.slice(1),
        commandRun = bot.commands.get(command);

    if (commandRun) commandRun(bot, msg, args, argsF, MessageEmbed, MessageButton, MessageSelectMenu, MessageActionRow, config, Discord)
        .catch(err => console.error(err))
}