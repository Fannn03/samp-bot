import bcrypt from 'bcrypt'
import model from '../models/model.js'

const ucp = model.ucp

export const registerUcp = async (request) => {
  try {
    await ucp.create({
      id: request.id,
      username: request.username,
      password: await bcrypt.hash(request.password, 10)
    })
  } catch (err) {
    throw err
  }
}