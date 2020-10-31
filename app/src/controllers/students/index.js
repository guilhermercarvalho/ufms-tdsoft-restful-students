import repository from '../../repositories/students'

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
    const { limite } = req.query
    // const { limite, pagina, nome } = req.query

    let results

    try {
      results = await repository.findAll({ limit: limite || 25 })
    } catch (error) {
      return next(error)
    }

    return results
      ? res.status(200).json({ resultados: results })
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
