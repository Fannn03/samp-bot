import { EmbedBuilder } from "discord.js"
import 'dotenv/config'
import registerUcpMiddleware from "../../middleware/register-ucp-middleware.js"
import { registerUcp } from "../../repositories/ucp.js"
import { registerUcpDirectMessage } from "../messages/register-ucp.js"

export const registerUcpService = async (interaction) => {
  const username = interaction.fields.getTextInputValue('username')
  const password = interaction.fields.getTextInputValue('password')

  const request = {
    id: interaction.user.id,
    username: username,
    password: password
  }

  try {
    await registerUcpMiddleware(request)
    await registerUcp(request)

    await interaction.user.send({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setThumbnail(interaction.guild.iconURL())
          .setTitle(`**Berhasil terdaftar di ${interaction.guild.name}**`)
          .setDescription(registerUcpDirectMessage(request, process.env.CHANNEL_REGISTER, process.env.CHANNEL_SUPPORT))
          .setTimestamp()
      ]
    })

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setTitle("**Registrasi berhasil**")
          .setDescription("Silahkan periksa DM mu.")
      ],
      ephemeral: true
    })

    return setTimeout(async () => {
      await interaction.deleteReply()
    }, 10000)
  } catch (err) {
    if(err.name === "SequelizeUniqueConstraintError") {
      err.message = err.errors[0].message
    }

    const message = await interaction.reply({
      embeds: [
        new EmbedBuilder()
        .setColor("Red")
        .setTitle("Registrasi Gagal")
        .setDescription(err.message)
      ],
      ephemeral: true
    })

    return setTimeout(async () => {
      await message.delete()
    }, 10000)
  }
}