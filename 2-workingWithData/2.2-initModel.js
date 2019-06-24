const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sqlliteDbFile'
});

const Dummy = sequelize.define('dummy', {
  description: Sequelize.STRING
});

Dummy.sync().then(() => {
  console.log('New table created');
}).finally(() => {
  sequelize.close();
})