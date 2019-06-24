const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sqlliteDbFile'
});

const Dummy = sequelize.define('dummy', {
  description: Sequelize.STRING
});

const initDes = 'foo' + (new Date().getTime())
const payload = {
  where: {description: initDes},
  raw: true
}

Dummy.create({ description: initDes }).then(() => {
  return Dummy.findOne(payload)
}).then((res)=> {
  console.log('1-=-=--= ', res)
  console.log(res.id)
  console.log(res.description)
  return Dummy.destroy(payload)
}).then(()=> {
  return Dummy.findOne(payload)
}).then((res)=> {
  console.log('2-=-=--= ', res) //null
}).finally(() => {
  sequelize.close();
});

