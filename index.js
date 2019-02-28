/**
 * @var Discord the DiscordJS library.
 * We're going to be loading the library here.
 * 
 * DiscordJS Documentation: https://discord.js.org/#/docs/main/stable/general/welcome
 * DiscordJS Support Server: https://discord.gg/bRCvFy9
 */
const Discord = require("discord.js");

/**
 * @var client the bot.
 * 
 * This is commonly referred to as `bot`.
 * This client is essentially the reason your bot will be able to work.
 */
const client = new Discord.Client(); 

/**
 * @var config the configuration file.
 * 
 * Out of the package, you get:
 * - `config.prefix` The bot prefix.
 * - `config.token` The bot token.
 * 
 * You can add other static documents (non-changing) here. 
 * To refer to the document, you would use: `config.<Property>`.
 */
const config = require("./config/config.json");

/**
 * @var fs The File System module. 
 * 
 * Documentation: https://nodejs.org/api/fs.html
 */
const fs = require("fs");

/**
 * @var path The Path module. It provides utility for working with files and directory paths.
 * 
 * Documentation: https://nodejs.org/api/path.html
 */
const path = require('path');

// Making a new Discord Collection for both commands and aliases.
// This is stored in the client.
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// Use the <Client>.login(<Token>) method to login to the Discord bot, allowing your bot to interact with users.
client.login(config.token);

// We're going to load all commands from the /commands/ folder.
let modules = fs.readdirSync('./commands/').filter(file => fs.statSync(path.join('./commands/', file)).isDirectory());
// Loop through each folder in /commands/
for (let module of modules) {
    console.log(`============[FOLDER Set: ${module}]============`);

    // Creates an array with all command file directory in the /commands/<Folder>/ directory.
    let commandFiles = fs.readdirSync(path.resolve(`./commands/${module}`)).
    filter(file => !fs.statSync(path.resolve('./commands/', module, file)).isDirectory()).
    filter(file => file.endsWith('.js'));

    // Loop through each array element (the array contains the command files).
    commandFiles.forEach((f, i) => {
        // Get the specific command file.
        let props = require(`./commands/${module}/${f}`);
        console.log(`Loaded: ${f} (${i + 1})`);
        // Add the command to the Discord Collection (client.commands).
        client.commands.set(props.help.name, props);
        // Add aliases to the Discord Collection (client.aliases), if any.
        props.help.alias.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
}

// Loading all events file.
// All events fall under the client class (e.g. client.on("message", ... => {}))
// https://discord.js.org/#/docs/main/stable/class/Client
fs.readdir("./events/", (err, files) => {
    // An error occurred when getting the file. Oops.
    if (err) console.log(err);
    // Load each file (the event file) in /events/.
    files.forEach(file => {
        // Get specific event file.
        let eventFunc = require(`./Events/${file}`);
        // Get the name of the event.
        // For example, if we had message.js
        // file.split(".") would split the string "message.js"
        // to ["message", "js"] and keep the first element.
        // The event is: message
        let eventName = file.split(".")[0];
        // Now we're going to wait for an event to be triggered.
        client.on(eventName, (...args) => eventFunc.run(client, ...args));
    });
});

// In case we get errors from the code
// Read this: https://nodejs.org/api/process.html#process_event_uncaughtexception
process.on("uncaughtException", (error) => {
    console.error(error);
});

// In case a promise is rejected.
// Read this: https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on("unhandledRejection", (error) => {
    console.error(error);
});