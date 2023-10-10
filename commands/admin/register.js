import { ActionRowBuilder, EmbedBuilder } from 'discord.js'
import 'dotenv/config'
import { registerUcpMessage } from '../../helper/messages/register-ucp.js'
import { registerUcpButton, registerCharacterButton } from '../../helper/button/register-button.js'

export default {
  name: 'register',
  aliases: ['daftar', 'reg'],
  usage: `${process.env.BOT_PREFIX}register`,
  description: "Register ucp account",
  command: async (client, message, args) => {
    const channel = await message.guild.channels.fetch(process.env.CHANNEL_REGISTER)

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("Registrasi Akun")
      .setDescription(registerUcpMessage(process.env.CHANNEL_SUPPORT))
      .setThumbnail(message.guild.iconURL())
    
    const buttons = new ActionRowBuilder()
      .addComponents(registerUcpButton(), registerCharacterButton())

    await channel.send({
      embeds: [embed],
      components: [buttons]
    })

    return message.reply("successfully send registration page")
  }
}