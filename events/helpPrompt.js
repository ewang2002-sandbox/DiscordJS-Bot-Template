const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (client, message, title, alias, amtArgs, desc, permissions, botperms, cmdusage, examples, config) => {
    const helpEmbed = new Discord.RichEmbed()
        .setTitle(title)
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor(0xFFD700)
        .setDescription(desc)
        .setFooter("<> Indicate Required. [] Indicate Optional.")
        .addField(`User Permissions`, permissions, true)
        .addField(`Bot Permissions`, botperms, true)
        .addField(`Aliases (Prefix: \`${config.prefix}\`)`, alias, true)
        .addField(`Arguments Required`, amtArgs, true)
        .addField(`Command Usage (Prefix: \`${config.prefix}\`)`, cmdusage)
        .addField(`Examples`, examples)
        .setTimestamp()
    return message.channel.send(helpEmbed)
}

