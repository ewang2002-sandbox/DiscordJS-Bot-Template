// This is the universal functions file.
// Use this to store functions you will be using across a bunch of commands.
// Will be easier for you to manage.
const Discord = require("discord.js");
const fs = require("fs");

/**
 * Builds a help RichEmbed based on the command information.
 * @param {Client} client The Discord Bot.
 * @param {Object} message The message object.
 * @param {String} command The command name.
 * @returns {Discord.RichEmbed} The help embed information.
 */
module.exports.helpMenuBuilder = (client, message, command) => {
    if (client.commands.has(command)) {
        command = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        command = client.commands.get(client.aliases.get(command))
    } else {
        return;
    }

    const userperms = command.help.userPermissions.join(", ") || "-";
    const botperms = command.help.botPermission.join(", ") || "-";
    const aliases = command.help.alias.join(", ") || "-";
    const cmdusage = command.help.usage.join("\n");
    const examples = command.help.example.join("\n") || "-";

    const helpEmbed = new Discord.RichEmbed()
        .setAuthor(command.help.cmdName, client.user.avatarURL)
        .setColor("RANDOM")
        .setDescription(command.help.description)
        .setFooter("<> Indicate Required. [] Indicate Optional.")
        .addField(`User Permissions`, "```css\n" + userperms + "```", true)
        .addField(`Bot Permissions`, "```css\n" + botperms + "```", true)
        .addField(`Arguments Required`, "```css\n" + command.help.argsLength + "```", true)
        .addField(`Aliases`, "```css\n" + aliases + "```", true)
        .addField(`Command Usage`, "```css\n" + cmdusage + "```")
        .addField(`Examples`, "```css\n" + examples + "```")
        .setTimestamp()

    return helpEmbed;
}

/**
 * Sends a message using the bot's default embed.
 * @param {Message} message the Message object.
 * @param {String} title the title of the embed.
 * @param {String} desc the embed description.
 */
module.exports.msgAlert = (message, title, desc) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle(title)
        .setTimestamp()
        .setDescription(desc)
        .setColor("RANDOM")
    return message.channel.send(embed).then(msg => msg.delete(5000));
}