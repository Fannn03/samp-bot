import model from '../models/model.js'

const ucp = model.ucp

export const registerUcp = async (request) => {
  try {
    await ucp.create({
      id: request.id,
      username: request.username,
      password: request.password
    })
  } catch (err) {
    throw err
  }
}