const Discord = require("discord.js");
const fs = require("fs");
const path = require('path');

module.exports.run = async (client, config, message, args) => {
    var commands = [];
    var fields = [];

    let modules = fs.readdirSync('./Commands/').filter(file => fs.statSync(path.join('./Commands/', file)).isDirectory());
    for (let module of modules) {
        let commandFiles = fs.readdirSync(path.resolve(`./Commands/${module}`)).
            filter(file => !fs.statSync(path.resolve('./Commands/', module, file)).isDirectory()).
            filter(file => file.endsWith('.js'));


        commandFiles.forEach(f => {
            var props = require(`../../Commands/${module}/${f}`);
            commands += `(${props.help.name}) `;
        });

        fields.push({
            name: module,
            value: `\`\`\`css\n${commands}\`\`\``
        })

        commands = [];

    }

    message.channel.send({
        embed: {
            color: 0xffd700,
            author: {
                name: message.author.tag,
                icon_url:  message.author.avatarURL
            },
            title: 'Bot Commands List',
            description: `Use \`${config.prefix}help <Command Name>\` to learn how to use it.`,
            fields: fields,
            footer: {
                text: `A Total of ${client.commands.size} Commands!`
            }
        }
    });
}

module.exports.help = {
    name: "commands",
    cmdName: "Commands Menu",
    alias: ["cmd"],
    description: "Shows all commands TurkieBot offers.",
    ownerOnly: false,
    botPermission: [],
    userPermissions: [],
    argsLength: 0,
    usage: ["commands"],
    example: ["commands"]
}