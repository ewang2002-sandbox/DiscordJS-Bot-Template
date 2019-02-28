const Discord = require("discord.js");

module.exports.run = async (client, config, message, args, functions) => {
    message.channel.send(functions.helpMenuBuilder(client, message, args[0])).catch(e => { });
}

module.exports.help = {
    name: "help",
    cmdName: "Help Menu",
    alias: [],
    description: "Gives more information about a command.",
    ownerOnly: false,
    botPermission: [],
    userPermissions: [],
    argsLength: 0,
    usage: ["help <Command>"],
    example: ["help 8ball"]
}

