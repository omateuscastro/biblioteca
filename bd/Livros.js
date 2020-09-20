const Sequelize = require('sequelize');
const conexao = require('./conexao');

const Livros = conexao.define('livros', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: Sequelize.STRING,
  autor: Sequelize.STRING,
  editora: Sequelize.STRING,
  ano: Sequelize.INTEGER
});

// O parâmetro force, controla se a tabela será recriada mesmo já existindo no banco de dados.
Livros.sync({force: false});

module.exports = Livros;