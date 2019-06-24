const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sqlliteDbFile'
});

const Dummy = sequelize.define('dummy', {
  description: Sequelize.STRING
});

Dummy.findAll({ raw: true }).then((res) => {
  console.log('1- res: ', res);
  return Dummy.findAndCountAll({ where: {description: 'test 1'},raw: true })
}).then((res) => {
  console.log('2- res.count: ', res.count)
  console.log('2- res.rows: ', res.rows)
}).finally(() => {
  sequelize.close();
});
