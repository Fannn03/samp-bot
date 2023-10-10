import { ButtonBuilder, ButtonStyle } from "discord.js"

export const registerUcpButton = () => {
  const button = new ButtonBuilder()
    .setCustomId('register-ucp')
    .setLabel("Register UCP")
    .setStyle(ButtonStyle.Success)

  return button
}

export const registerCharacterButton = () => {
  const button = new ButtonBuilder()
    .setCustomId('register-character')
    .setLabel("Create Character")
    .setStyle(ButtonStyle.Primary)

  return button
}