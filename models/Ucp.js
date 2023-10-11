import { Sequelize } from 'sequelize'
import sequelize from '../config/database.js'

export const Ucp = sequelize.define('ucps', {
  id: {
    type: Sequelize.STRING,
    unique: {
      args: true,
      msg: "Akun sudah pernah terdaftar"
    },
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: {
      args: true,
      msg: "Username telah di pakai"
    },
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  level: {
    type: Sequelize.ENUM("user", "junior helper", "senior helper", "junior admin", "senior admin", "head admin", "developer"),
    defaultValue: "user"
  }
})