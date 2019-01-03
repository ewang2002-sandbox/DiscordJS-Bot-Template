// AUTHENTICATION
const Discord = require("discord.js"); //https://discord.js.org/#/docs/main/stable/general/welcome
const client = new Discord.Client(); //Get "npm install opusscript"

// CONFIGURATION FILES
const config = require("./config/config.json");

// MODULES 
const fs = require("fs");
const path = require('path');

// OTHER FILES
const msgAlert = require("./node_functions/messageAlert.js");

// COMMANDS AND ALIASES
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// LOGIN
client.login(config.token);

// LOADS COMMANDS
let modules = fs.readdirSync('./commands/').filter(file => fs.statSync(path.join('./commands/', file)).isDirectory());
for (let module of modules) {
    console.log(`============[FOLDER Set: ${module}]============`);

    let commandFiles = fs.readdirSync(path.resolve(`./commands/${module}`)).
    filter(file => !fs.statSync(path.resolve('./commands/', module, file)).isDirectory()).
    filter(file => file.endsWith('.js'));

    commandFiles.forEach((f, i) => {
        let props = require(`./commands/${module}/${f}`);
        console.log(`Loaded: ${f} (${i + 1})`);
        client.commands.set(props.help.name, props);
        props.help.alias.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
}

// CONFIRM READY
client.on("ready", () => {
    let date = new Date();
    console.log('\x1b[33m', `Sample Bot has started on ${date}.`);
    client.user.setActivity(
        'The Sample Stuff.', {
            type: 'WATCHING'
        });
    client.user.setStatus('online');
});

// BOT COMMANDS
client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = cmd.slice(prefix.length);

    let execCMD;
    if (client.commands.has(commandfile)) {
        execCMD = client.commands.get(commandfile);
    } else if (client.aliases.has(commandfile)) {
        execCMD = client.commands.get(client.aliases.get(commandfile));
    }

    if (execCMD) {
        message.delete().catch(error => {});
        if (execCMD.help.ownerOnly) {
            let app = await message.client.fetchApplication();
            let owner = await message.client.fetchUser(app.owner.id);
            if (owner.id !== message.author.id) {
                return msgAlert.messageAlert(message, "Denied", "You are not the bot's owner.");
            }
        }

        if (execCMD.help.userPermissions) {
            if (!message.channel.permissionsFor(message.member) || !message.channel.permissionsFor(message.member).has(execCMD.help.userPermissions)) {
                return msgAlert.messageAlert(message, "Denied", "You do not have the permissions needed to run this command.");
            }
        }

        if (execCMD.help.botPermission) {
            if (!message.channel.permissionsFor(message.guild.me) || !message.channel.permissionsFor(message.guild.me).has(execCMD.help.botPermission)) {
                return msgAlert.messageAlert(message, "Denied", "I cannot run the command due to limited permissions.");
            }
        }

        if (args.length < execCMD.help.argsLength) {
            command = commandfile;
            return require(`./events/helpredirect`).run(client, config, message, command);
        }

        return execCMD.run(client, config, message, args);
    }
});