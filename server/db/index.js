const {Pool} = require('pg')

const pool = new Pool(
//    dont do this. so ist das für jeden der den code hat sichtbar
//     {
//     user: 'postgres',
//     host: 'localhost',
//     database: 'practice',
//     password: '123456789',
//     port: 5432,
// }
);

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}