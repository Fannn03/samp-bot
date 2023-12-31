import { ButtonInteraction, ModalSubmitInteraction } from "discord.js"
import { registerUcpModal } from "../helper/modal/register-ucp.js"
import { registerUcpService } from "../helper/service/register-ucp.js";

export default async (interaction) => {
  const { customId } = interaction

  if(interaction instanceof ButtonInteraction) {
    if(customId === "register-ucp") return registerUcpModal(interaction)
  }
  
  if(interaction instanceof ModalSubmitInteraction) {
    if(customId === "register-ucp-modal") return registerUcpService(interaction)
  }
}