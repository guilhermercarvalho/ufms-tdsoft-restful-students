import sequelize from './index'
import fs from 'fs'
import path from 'path'

export default () => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, '/data.sql'))
    sequelize.query(sql)
  } catch (err) {
    console.error(err)
  }
}
