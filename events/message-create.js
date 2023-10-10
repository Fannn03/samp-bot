import 'dotenv/config'

export default async (client, message) => {
  
  if(message.content.startsWith(process.env.BOT_PREFIX)) {
    const splitMessage = message.content.slice(process.env.BOT_PREFIX.length).split(" ")
    const commandName = splitMessage.shift()
    const args = splitMessage
    
    for(let commands of client.commands) {
      if(commandName === commands.name || commands.aliases.includes(commandName)) {
        return commands.command(client, message, args)
      }
    }
  }

}