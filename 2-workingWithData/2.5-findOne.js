const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sqlliteDbFile'
});

const Dummy = sequelize.define('dummy', {
  description: Sequelize.STRING
});

Dummy.findAll({ raw: true }).then((res) => {
  const {id} = res[0]
  const payload = {
    where: {id},
    raw: true
  }
  return Dummy.findOne(payload)
}).then((res) => {
  console.log(res)
}).finally(() => {
  sequelize.close();
});
