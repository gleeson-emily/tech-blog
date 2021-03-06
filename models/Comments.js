const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comments extends Model {

}

Comments.init(
    {
       id: {
           type:DataTypes.INTEGER,
           allowNull: false,
           autoIncrement:true,
           primaryKey: true
       },
       content: {
           type: DataTypes.TEXT,
           allowNull: false,
           defaultValue: ''
           
       },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'posts',
              key: 'id'
          }
       },
  },
       {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
      }    
);

module.exports = Comments;