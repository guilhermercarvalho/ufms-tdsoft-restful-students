import repository from "../../repositories/students"

export default {
    async get(req, res, next) {
        const { id } = req.params
        let results = [];
        try {
            results = await repository.findByPk(id)
        } catch (error) {
            return next(error)
        }
        return res.status(200).json(results)
    },
    async getAll(req, res, next) { 
        let results = []
        try {
            results = await repository.findAll()
        }catch(error) {
            return next(error)
        }

        return res.status(200).json(results)
    },
    create(req, res, next) { },
    update(req, res, next) { },
    destroy(req, res, next) { }
}