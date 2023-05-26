const Knex = require ('knex');
const knex = Knex({
    client: 'mysql2',
    connection: process.env.MYSQL_CONNECTION_URL
});

module.exports = {
    knex
}