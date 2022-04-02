import sequelize from '../../../database'
import { DataTypes } from 'sequelize'

const Aluno = sequelize.define('Aluno', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  rga: {
    type: DataTypes.STRING
  },
  nome: {
    type: DataTypes.STRING
  },
  curso: {
    type: DataTypes.STRING
  },
  situacao: {
    type: DataTypes.STRING
  },
  registrado_em: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'aluno',
  timestamps: false
})

export default Aluno
