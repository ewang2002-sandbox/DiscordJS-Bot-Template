module.exports.run = async (client) => {
    let date = new Date();
    // Ensure the bot is ready, send message to console.
    console.log('\x1b[33m', `${client.user.tag} (${client.user.id}) has started on ${date}.`);
    // Set the bot's activity.
    client.user.setActivity(
        'Sample Thingy.', {
            /*
             * Possible game type for the bot.
             * - PLAYING
             * - WATCHING
             * - LISTENING (to)
             * - STREAMING (needs link)
             */
            type: 'WATCHING'
        });
    /*
     * Possible statuses for the bot
     * - online
     * - idle
     * - dnd 
     */
    client.user.setStatus('online');
}