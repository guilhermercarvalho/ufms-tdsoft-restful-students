import repository from '../../repositories/students'
import { Op } from 'sequelize'

export default {
  async get (req, res, next) {
    const { id } = req.params
    let results
    try {
      results = await repository.findByPk(id)
    } catch (error) {
      return next(error)
    }
    return results
      ? res.status(200).json({ resultados: [results] })
      : res.status(404).json({
        erro: {
          mensagem: `Aluno com ID '${id}' não encontrado`
        }
      })
  },
  async getAll (req, res, next) {
    try {
      Object.keys(req.query).forEach(el => {
        if (Object.values(req.query).length > 0 && !(['limite', 'pagina', 'nome'].includes(el))) {
          throw new Error('Parametro invalido')
        }
      })
    } catch (error) {
      return res.status(400).json({
        erro: {
          mensagem: error.message
        }
      })
    }

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
    const rga = req.body.rga
    const nome = req.body.nome
    const curso = req.body.curso
    const situacao = req.body.situacao
    let student
    try {
      if (!rga || !nome || !curso) {
        throw new Error('RGA, nome e curso devem ser informados')
      }

      if (situacao && !(['ativo', 'inativo'].includes(situacao))) {
        throw new Error('situacao deve ser: ativo ou inativo')
      }

      if (rga.length !== 15 || rga.replace(/\.|\-/g, '').length !== 12) {
        throw new Error('RGA invalido')
      }
    } catch (error) {
      return res.status(400).json({
        erro: {
          mensagem: error.message
        }
      })
    }
    try {
      student = await repository.create({
        rga: rga,
        nome: nome,
        curso: curso,
        situacao: situacao || 'ativo',
        registrado_em: new Date().toISOString()
      })
    } catch (error) {
      return res.status(400).json({
        erro: {
          mensagem: error.message
        }
      })
    }
    return res.status(201).json({
      resultados: student
    })
  },
  async update (req, res, next) {
    const { id } = req.params
    const rga = req.body.rga
    const nome = req.body.nome
    const curso = req.body.curso
    const situacao = req.body.situacao
    try {
      if (!rga || !nome || !curso) {
        throw new Error('RGA, nome e curso devem ser informados')
      }

      if (situacao && !(['ativo', 'inativo'].includes(situacao))) {
        throw new Error('situacao deve ser: ativo ou inativo')
      }

      if (rga.length !== 15 || rga.replace(/\.|\-/g, '').length !== 12) {
        throw new Error('RGA invalido')
      }
    } catch (error) {
      return res.status(400).json({
        erro: {
          mensagem: error.message
        }
      })
    }
    let student
    let result
    try {
      result = await repository.findByPk(id)
    } catch (error) {
      return next(error)
    }
    if (result) {
      try {
        student = await repository.update(req.body, { where: { id: id } })
      } catch (error) {
        return next(error)
      }
      return res.status(200).json({
        resultados: student
      })
    }
    return res.status(404).json({
      erro: {
        mensagem: `Aluno com ID '${id}' não encontrado`
      }
    })
  },
  async destroy (req, res, next) {
    const { id } = req.params
    let student
    let result
    try {
      result = await repository.findByPk(id)
    } catch (error) {
      return next(error)
    }
    if (result) {
      try {
        student = await repository.destroy({ where: { id: id } })
      } catch (error) {
        return next(error)
      }
      return res.status(200).json({
        resultados: [
          student
        ]
      })
    }
    return res.status(404).json({
      erro: {
        mensagem: `Aluno com ID '${id}' não encontrado`
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
