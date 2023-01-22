const { ask } = require("./open-ai.js")
const { Client, Events, GatewayIntentBits } = require('discord.js')
const key = require('./key.json')

const client = new Client({
  intents:
    [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, client => {
  console.log(`Bot ${client.user.tag} Siap!`);
});

client.on(Events.MessageCreate, async message => {
  if (message.content.substring(0, 1) === "!") {
    const prompt = message.content.substring(1)
    const answer = await ask(prompt)
    client.channels.fetch(message.channelId).then(channel => channel.send(answer))
  }
});

client.login(key.client_token);