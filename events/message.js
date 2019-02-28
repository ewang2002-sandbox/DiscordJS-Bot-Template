const config = require("../config/config.json");

// Getting the necessary functions from the functions file.
const {
    msgAlert,
    helpMenuBuilder
} = require("../utility/functions.js")

module.exports.run = async (client, message) => {
    // Ignore bots. This is important, as we do not want bot-deception.
    if (message.author.bot) return;
    // Commands can only be used in the guild.
    // FYI: guild, in this case, refers to the server.
    if (!message.guild) return;
    // Get the prefix from the configuration file.
    let prefix = config.prefix;
    // Make sure the prefix is the first thing in a message.
    if (message.content.indexOf(prefix) != 0) return;
    // Split the message content apart.
    // We will use this to get the command file, the argument, and more.
    let messageArray = message.content.split(" ");
    // The command name (w/ prefix).
    let cmd = messageArray[0];
    // The arguments.
    let args = messageArray.slice(1);
    // The actual command (no prefix).
    let commandfile = cmd.slice(prefix.length);

    let execCMD;
    if (client.commands.has(commandfile)) { // See if the commands Collection has the commandfile.
        execCMD = client.commands.get(commandfile);
    } else if (client.aliases.has(commandfile)) { // If not, find an alias associated with the commandfile. 
        execCMD = client.commands.get(client.aliases.get(commandfile));
    }

    // If the command file exists, 
    // let's go through the tedious process of ensuring the command
    // can be run with respect to permissions.
    if (execCMD) {
        // Delete the message. The .catch() is there in case the bot is not able to delete the user message.
        message.delete().catch(error => {});
        // Check to see if the command can only be run by the owner.
        if (execCMD.help.ownerOnly) {
            // Get the bot application.
            let app = await message.client.fetchApplication();
            // Get the owner ID of the application.
            let owner = await message.client.fetchUser(app.owner.id);
            // If the message author does NOT match the owner ID,
            // deny the person access to the command.
            if (owner.id !== message.author.id) {
                return msgAlert(message, "Denied", "You are not the bot's owner.");
            }
        }

        // Check to see if user permissions exist for the command.
        // If so, check to see if the user has the permissions to run the command.
        if (execCMD.help.userPermissions) {
            // Should be pretty obvious what this does.
            if (!message.channel.permissionsFor(message.member) || !message.channel.permissionsFor(message.member).has(execCMD.help.userPermissions)) {
                return msgAlert(message, "Denied", "You do not have the permissions needed to run this command.");
            }
        }

        // Check to see if bot permissions exist for this command.
        if (execCMD.help.botPermission) {
            // Check to see if the bot has the permissions to execute the command.
            if (!message.channel.permissionsFor(message.guild.me) || !message.channel.permissionsFor(message.guild.me).has(execCMD.help.botPermission)) {
                return msgAlert(message, "Denied", "I cannot run the command due to limited permissions.");
            }
        }

        // Check to see if the argument length provided matches the minimum required.
        if (args.length < execCMD.help.argsLength) {
            command = commandfile;
            // Nope, stop the command from running & tell the user what they screwed up on.
            return message.channel.send(helpMenuBuilder(client, message, commandfile));
        }

        // Get the functions file.
        // And make it available across all commands.
        const functions = require("../utility/functions");
        // Run the command. Yay, we got this far. :)
        return execCMD.run(client, config, message, args, functions);
    }
}

/**
 * Returns a random array element from an array.
 * @param {any[]} arr Array of elements.
 * @returns {any} An element of that array.
 * 
 * @example functions.randArr([1, 2, 3, 4, 5, 6, 7, 8]); // Returns (example): 5
 */
module.exports.randArr = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Gets a random integer, inclusive.
 * @param {Number} min the minimum value.
 * @param {Number} max The maximum value.
 * @returns {Number} The random integer.
 * 
 * @example functions.randomInt(1, 5); // Returns (example): 4
 */
module.exports.randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

