const Discord = require("discord.js");

module.exports.run = async (client, config, message, args) => {
    let command = args[0];
    if (client.commands.has(command)) {
        command = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        command = client.commands.get(client.aliases.get(command))
    } else {
        return;
    }

    let userperms = command.help.userPermissions.join(", ") || "None"; //User Permission Required
    let clientPerms = command.help.botPermission.join(", ")  || "None"; // Bot Permission Required
    let aliasID = command.help.alias.join(", ") || "None"; // Aliases for Command

    var title = command.help.cmdName;
    var alias = "```css\n" + aliasID + "```";
    var desc = command.help.description;
    var permissions = "```css\n" + userperms + "```";
    var botperms = "```css\n" + clientPerms + "```";
    var amtArgs = "```css\n" + command.help.argsLength + "```";
    var cmdusage = "```css\n" + command.help.usage.join("\n") + "```";
    var examples = "```css\n" + command.help.example.join("\n") + "```";

    
    let helpPrompt = require(`../../events/helpPrompt`);
    return helpPrompt.run(client, message, title, alias, amtArgs, desc, permissions, botperms, cmdusage, examples, config);
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

