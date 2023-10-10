import register from '../commands/admin/register.js'


export const commandManager = (client) => {
  let commands = []

  commands.push(register)

  return client.commands = commands
}