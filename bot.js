const Discord = require('discord.js');
const { Translate } = require('@google-cloud/translate');

const client = new Discord.Client();
const translate = new Translate();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  // Ignore messages sent by the bot itself
  if (message.author.bot) return;

  // Get the user's set language (assuming it's stored in a database)
  const userLanguage = 'fr';

  // Translate the message to the user's language
  const [translation] = await translate.translate(message.content, userLanguage);

  // Send the translated message back to the user
  message.channel.send(translation);
});

client.login('YOUR_DISCORD_BOT_TOKEN');
