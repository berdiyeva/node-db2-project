const knex = require("knex");
const knexfile = require("../knexfile");

module.exports = knex.Client(knexfile);