import express from 'express'
import { Client, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'

const app = express()
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
  ]
})

client.on('ready', () => {
  console.log('bot is ready');
})

client.login(process.env.BOT_TOKEN)

app.listen(process.env.SERVER_PORT, () => {
  console.log('server started');
})