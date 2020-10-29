import db from "../../../database/index"

export default {
    get(id) {
        const sql = "SELECT * FROM aluno WHERE id=?"
        db.get(sql, [id], (err, row) => {
            if(err){
                return console.log(err.message)
            }
            return row
        })
    },
    getAll(limit, page, name) {
        const sql = "SELECT * FROM aluno LIMIT ?"
        db.get(sql, [limit], (err, row) => {
            if(err){
                throw err
            }
            return row
        })
    },
//insert into aluno (id, rga, nome, curso, situacao, registrado_em) values (1, '2982.6820.246-8', 'Corbet Pohlak', 'trc', 'ativo', '2019-03-17 22:18:22');
    create(rga, name, course) {
        const sql = `INSERT INTO aluno VALUES(?, ?, ?, ativo, ${new Date().toISOString()})`
        db.run(sql, [rga, name, course], function(err) {
            if (err) {
                return console.log(err.message);
            }
            return {"status": "CREATE"}
        })
    },
    update(id){
        // const sql = `DROP FROM aluno WHERE id = ?`
        // db.run(sql, [id], function(err) {
        //     if (err) {
        //         return console.log(err.message);
        //     }
        //     return {"status": "DELETE"}
        // })
        return true
    },
    destroy(id){
        const sql = `DROP FROM aluno WHERE id = ?`
        db.run(sql, [id], function(err) {
            if (err) {
                return console.log(err.message);
            }
            return {"status": "DELETE"}
        })
    }
}
