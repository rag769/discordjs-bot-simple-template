module.exports = {
  conf: {
    once: true,
  },
  execute(client) {
    console.log(`${client.user.tag}, ready to serve ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} users in ${client.guilds.cache.size} servers.`);

    //Set the bot activity
    //client.user.setActivity("bot", { type: "PLAYING" });
  }
}
