const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sqlliteDbFile'
});

const Dummy = sequelize.define('dummy', {
  description: Sequelize.STRING
});

Dummy.create({ description: 'test 1' }).then(() => {
  console.log('table created');
}).finally(() => {
  sequelize.close();
});
