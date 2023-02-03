require("dotenv").config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildScheduledEvents,
  // add what you need
  // https://discord.com/developers/docs/topics/gateway#list-of-intents
]});
const fs = require("fs");


const commands = new Collection();
const config = require("./config.js");
client.cache = {
  commands,
  config
}

const cmds = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'));
for (const c of cmds) {
  const props = require(`./commands/${c}`);
  console.log(`${props.conf.name} command loaded`);
  client.cache.commands.set(props.conf.name, props);
}

const evts = fs.readdirSync('./events/').filter(f => f.endsWith('.js'));
for (const e of evts) {
  const props = require(`./events/${e}`);
  const name = e.split(".")[0];
  console.log(`${name} event loaded`);
  if (props.once) {
    client.once(name, (...args) => props.execute(...args, client))
  } else {
    client.on(name, (...args) => props.execute(...args, client))
  }
}

client.login(process.env.DISCORD_TOKEN);