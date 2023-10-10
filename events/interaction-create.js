import { ButtonInteraction } from "discord.js"
import { registerUcpModal } from "../helper/modal/register-ucp.js"

export default async (interaction) => {
  if(interaction instanceof ButtonInteraction) {
    const { customId } = interaction

    if(customId === "register-ucp") return registerUcpModal(interaction)
  }
}