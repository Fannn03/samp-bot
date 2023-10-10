import { EmbedBuilder } from "discord.js"
import registerUcpMiddleware from "../../middleware/register-ucp-middleware.js"

export const registerUcpForm = async (interaction) => {
  const username = interaction.fields.getTextInputValue('username')
  const password = interaction.fields.getTextInputValue('password')

  const request = {
    username: username,
    password: password
  }

  try {
    await registerUcpMiddleware(request)
  } catch (err) {
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