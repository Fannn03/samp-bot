import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js"

export const registerUcpModal = async (interaction) => {
  const modal = new ModalBuilder()
    .setCustomId('register-ucp-modal')
    .setTitle('Register UCP')

  const usernameField = new TextInputBuilder()
    .setCustomId('username')
    .setLabel("Username")
    .setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setMinLength(5)
    .setMaxLength(16)
  
  const passwordField = new TextInputBuilder()
    .setCustomId('password')
    .setLabel("Password")
    .setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setMinLength(5)
    .setMaxLength(24)

  const username = new ActionRowBuilder()
    .addComponents(usernameField)
  const password = new ActionRowBuilder()
    .addComponents(passwordField)

  modal.addComponents(username, password)

  return await interaction.showModal(modal)
}