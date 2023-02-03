module.exports = {
  conf: {
      name: 'サイコロ',
  },
  async run (client, message, args) {
      message.channel.send(String(Math.floor( Math.random() * 6) + 1));
  }
}
