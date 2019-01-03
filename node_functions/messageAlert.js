const Discord = require("discord.js");

module.exports.messageAlert = (message, title, desc) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setColor(0xa5ff00)
        .setTitle(title)
        .setDescription(desc)
        .setFooter("SampleBot")
        .setTimestamp()
    message.channel.send({ embed }).then(message => { message.delete(5000) });
}