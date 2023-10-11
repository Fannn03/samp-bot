import { Sequelize } from 'sequelize'
import sequelize from '../config/database.js'

export const Ucp = sequelize.define('ucps', {
  id: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
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