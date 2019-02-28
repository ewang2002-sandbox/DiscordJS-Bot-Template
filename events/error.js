// Always have an error event ready.
// This should prevent the bot from disconnecting from the API
// Without this, your bot will crash within a day due to an API error.
// The error event reconnects to the API when an error occurs.
module.exports.run = (client, error) => {
    console.error(error);
}