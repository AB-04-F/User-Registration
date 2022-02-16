const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_user', {
    user_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    user_password: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_city: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    user_dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tbl_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
