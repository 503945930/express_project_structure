const config = require('config')

module.exports = function (sequelize, DataTypes) {
  var Model = sequelize.define('User', {
    id: { type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment: '', field: 'id' },
    username: {
      type: DataTypes.STRING,
      comment: '用户名',
      field: 'display_name'
    },
    password: {
      type: DataTypes.STRING,
      comment: ''
    }
  }, {
    tableName: `${config.get('db_prefix')}_user`,
    classMethods: {
      associate: function (models) {

      }
    }
  })

  return Model
}