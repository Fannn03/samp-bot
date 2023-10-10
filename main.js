import express from 'express'
import { Client, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'
import messageCreate from './events/message-create.js'
import { commandManager } from './helper/command-manager.js'
import interactionCreate from './events/interaction-create.js'

const app = express()
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
  ]
})

// push all discord commands
commandManager(client)

client.on('ready', () => {
  console.log('bot is ready');
})

// discord event
client.on('messageCreate', (message) => {
  return messageCreate(client, message)
})

client.on('interactionCreate', (interaction) => {
  return interactionCreate(interaction)
})

client.login(process.env.BOT_TOKEN)

app.listen(process.env.SERVER_PORT, () => {
  console.log('server started');
})