const Discord = require("discord.js");

// Put this file in a FOLDER in the /commands/ folder.
// The bot will NOT read files only located in the /commands/ folder.

module.exports.run = async (client, config, message, args, functions) => {
    // Command code goes here.
}

module.exports.help = {
    name: "", // Command initiator name. This is the NAME people will use to run this command.
    cmdName: "", // Command formal name. The formal name of the command to be displayed in the help menu.
    alias: [], // Aliases for the command, if any.
    description: "", // Description of the command.
    ownerOnly: false, // Whether the command can only be run by the BOT OWNER. A good example would be eval.
    botPermission: [], // Permissions the bot needs to run this command. See the below comment for more info.
    userPermissions: [], // Permissions the user needs to run this command. See the below comment for more info.
    argsLength: 0, // Argument length. The minimum amount of arguments the bot REQUIRES.
    usage: [], // How to use this command.
    example: [] // Exmaples of how this command can be used.
}

/**
 * ALL PERMISSIONS LIST: https://discordapp.com/developers/docs/topics/permissions
 * 
 * Put the permission below in the array botPermission OR userPermissions, surrounded by quotes.
 * 
 * CREATE_INSTANT_INVITE
 * KICK_MEMBERS 
 * BAN_MEMBERS 
 * ADMINISTRATOR 
 * MANAGE_CHANNELS 
 * MANAGE_GUILD 
 * ADD_REACTIONS
 * VIEW_AUDIT_LOG
 * VIEW_CHANNEL
 * SEND_MESSAGES
 * SEND_TTS_MESSAGES
 * MANAGE_MESSAGES 
 * EMBED_LINKS
 * ATTACH_FILES
 * READ_MESSAGE_HISTORY
 * MENTION_EVERYONE
 * USE_EXTERNAL_EMOJIS
 * CONNECT
 * SPEAK
 * MUTE_MEMBERS
 * DEAFEN_MEMBERS
 * MOVE_MEMBERS
 * USE_VAD
 * PRIORITY_SPEAKER
 * CHANGE_NICKNAME
 * MANAGE_NICKNAMES
 * MANAGE_ROLES 
 * MANAGE_WEBHOOKS 
 * MANAGE_EMOJIS 
 */