const Sequelize = require('sequelize');
const sequelize = new Sequelize('fullstackexpense','root','Nitin@1234',{
  dialect :'mysql',
  host:'localhost'
});

module.exports=sequelize;