import repository from '../../repositories/students'
import { Op } from 'sequelize'

export default {
  async get (req, res, next) {
    const { id } = req.params
    const results = []
    try {
      results.push(await repository.findByPk(id))
    } catch (error) {
      return next(error)
    }
    return results[0]
      ? res.status(200).json({ resultados: results })
      : res.status(404).json({
        erro: {
          mensagem: `Aluno com ID '${id}' não encontrado`
        }
      })
  },
  async getAll (req, res, next) {
    const limite = parseInt(req.query.limite) || 25
    const pagina = parseInt(req.query.pagina) || 1
    const nome = req.query.nome
      ? `%${req.query.nome}%`
      : '%'

    const offset = (pagina - 1) * limite

    let results

    try {
      results = await repository.findAndCountAll({
        offset: offset,
        limit: limite,
        where: {
          nome: {
            [Op.like]: nome
          }
        }
      })
    } catch (error) {
      return next(error)
    }

    return results
      ? res.status(200).json({
          paginacao: {
            atual: pagina,
            proxima: (offset + limite) < results.count
              ? pagina + 1
              : null,
            anterior: offset > 0
              ? pagina - 1
              : null,
            total: Math.ceil(results.count / limite)
          },
          contagem: results.rows.length,
          total: results.count,
          resultados: results.rows
        })
      : res.status(404).json({
        erro: {
          mensagem: 'Banco de dados vazio'
        }
      })
  },
  async create (req, res, next) {
    const { rga, nome, curso, situacao } = req.body
    const student = await repository.create({
      rga: rga,
      nome: nome,
      curso: curso,
      situacao: situacao || 'ativo',
      registrado_em: new Date().toISOString()
    })
    return res.status(200).json({
      resultados: {
        student
      }
    })
  },
  async update (req, res, next) {
    const { id } = req.params
    const body = req.body
    const student = await repository.update(body, { where: { id: id } })
    return res.status(200).json({
      resultados: {
        student
      }
    })
  },
  async destroy (req, res, next) {
    const { id } = req.params
    const student = await repository.destroy({
      where: { id: id }
    })
    return res.status(200).json({
      resultados: {
        student
      }
    })
  },
  invalidEndpoint (req, res, next) {
    return res.status(405).json({
      erro: {
        mensagem: 'Método inválido'
      }
    })
  }
}
