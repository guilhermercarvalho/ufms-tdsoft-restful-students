import repository from "../../repositories/students"

export default {
    async get(req, res, next) {
        const { id } = req.params
        let results = [];
        try {
            results.push(await repository.findByPk(id))
        } catch (error) {
            return next(error)
        }
        return !!results[0]
            ? res.status(200).json({resultados: results})
            : res.status(404).json({
                erro: {
                    mensagem: `Aluno com ID \'${id}\' não encontrado`
                }
            })
    },
    async getAll(req, res, next) {
        const query = req.query;

        let limit = query.limite || 25
        let page = query.pagina || 1
        let name = query.nome || false
        let results

        try {
            results = await repository.findAll({ limit: limit})
        } catch (error) {
            return next(error)
        }

        return results
            ? res.status(200).json({resultados: results})
            : res.status(404).json({
                erro: {
                    mensagem: "Banco de dados vazio"
                }
            })
    },
    create(req, res, next) { },
    update(req, res, next) { },
    destroy(req, res, next) { }
}