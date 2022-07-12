module.exports = async (bot) => {
    const { MessageEmbed } = require("discord.js")
    const qq = new MessageEmbed()
        .setColor(0xffffff)
        .setDescription(`**${bot.user.tag}: Запустился!**`)
    console.log(`Бот ${bot.user.tag}: КУКУ ЁПТА!`)
    //bot.channels.cache.get("983796635874263091").send("<@&947429800925069342><@&973516112392241202>")
    bot.channels.cache.get("983796635874263091").send({ embeds: [qq]})
    bot.user.setPresence({
        status: 'online',
        activities: [
            {
                name: ' %help',
                type: 3
            }
        ]
    });

    /* const commandsIT = bot.guilds.cache.get("948664405279784990").commands; //Или bot.application.commands - если команды будут глобальными
    await commandsIT.fetch(); //Найти все команды

    for (const command of bot.commands.any) {
        if (command.interaction) { //Если слэш команда есть
            const interaction = await commandsIT.cache.find(com => com.name == command.interaction.name); //Найти команду в боте по названию
            if (!interaction) { //Если команда не была найдена в боте
                commandsIT.create(command.interaction); //Создать команду
            } else  //Если команда есть
                if (JSON.stringify(interaction.options) !== JSON.stringify(command.interaction.options)) {//И параметры команды не совпадают (т.е. команда была изменена)
                    interaction.edit(command.interaction); //Редактируем эту команду
                }
        }
    } */
}