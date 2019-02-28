const Discord = require("discord.js");

module.exports.run = async (client, config, message, args, functions) => {
    try {
        let responseMessage = await message.channel.send({
            embed: {
                color: 0xe5cc0b,
                description: 'Pinging!'
            }
        });
        await responseMessage.edit({
            embed: {
                color: 0xe5cc0b,
                title: `${client.user.tag} Ping Statistics`,
                fields: [
                {
                    name: 'Response Time',
                    value: `${responseMessage.createdTimestamp - message.createdTimestamp}ms`,
                    inline: true
                },
                {
                    name: 'WebSocket/API Ping',
                    value: `${client.ping}ms`,
                    inline: true
                }
            ]}
        });
    }
    catch (e) {
        console.log(e);
    }
}

module.exports.help = {
    name: "ping",
    cmdName: "Bot Ping",
    alias: [],
    description: "Checks the bot's server and API response times.",
    ownerOnly: true,
    botPermission: [],
    userPermissions: [],
    argsLength: 0,
    usage: ["ping"],
    example: [ "ping" ]
}