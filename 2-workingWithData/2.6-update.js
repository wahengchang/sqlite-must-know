const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sqlliteDbFile'
});

const Dummy = sequelize.define('dummy', {
  description: Sequelize.STRING
});

const initDes = 'foo'
const updatedDes = 'foo' + (new Date().getTime())

Dummy.create({ description: initDes }).then(() => {
  const payload  = { description:  updatedDes}
  const condition = {where: {description: initDes}}
  return Dummy.update(payload, condition)
}).then(()=> {
  const payload  = {
    where: { description:  updatedDes},
    raw: true
  }
  return Dummy.findOne(payload)
}).then((res)=> {
  console.log(res.id)
  console.log(res.description)
}).finally(() => {
  sequelize.close();
});

