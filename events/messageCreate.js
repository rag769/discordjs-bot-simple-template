module.exports = {
  conf: {
    once: false,
  },
  execute(message, client) {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;

    const prefix = new RegExp(`^<@!?${client.user.id}> |^\\${client.cache.config.prefix}`).exec(message.content);
    console.log(prefix)
    if (!prefix) return;

    const args = message.content.slice(prefix[0].length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.guild && !message.member) message.guild.members.fetch(message.author);
    const cmd = client.cache.commands.get(command);
    if (!cmd) return;

    try {
      cmd.run(client, message, args);
    }catch (e) {
      console.error(e);
      message.channel.send({content: `コマンド実行エラーが発生しました。\n\`\`\`${e.message}\`\`\``})
        .catch(e => console.error("エラーをリプライ中にエラーが発生しました。", e));
    }
  }
}
