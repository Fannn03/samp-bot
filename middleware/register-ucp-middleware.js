import Joi from "joi"

export default async (request) => {
  const form = Joi.object({
    id: Joi.string()
      .required()
      .empty()
    ,
    username: Joi.string()
      .pattern(/^\S+$/)
      .messages({
        "string.pattern.base": "Username tidak boleh mengandung spasi"
      })
    ,
    password: Joi.string()
      .pattern(/^\S+$/)
      .messages({
        "string.pattern.base": "Password tidak boleh mengandung spasi"
      })
  })

  try {
    await form.validateAsync(request)
  } catch (err) {
    throw new Error(err.details[0].message)
  }
}