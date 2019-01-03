const Discord = require("discord.js");

module.exports.run = async (client, config, message, args) => {

}


module.exports.help = {
    name: "",
    cmdName: "",
    alias: [],
    description: "",
    ownerOnly: false,
    botPermission: [],
    userPermissions: [],
    argsLength: 0,
    usage: [],
    example: []
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