import sequelize from './index'

export default () => {
    try {
        let sql = fs.readFileSync(__dirname + "/data.sql", 'utf8');
        sequelize.query(sql)
    } catch (err) {
        console.error(err);
    }
}