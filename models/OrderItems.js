// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

/**
 * create our OrderItems model
*/
class OrdeOrderItemsrs extends Model {}  

// create fields/columns for Restaurants model
OrderItems.init(
  {
    order_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'orders',
        key: 'order_id',
        unique: false
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'items',
        key: 'item_id',
        unique: false
      }
    }, 
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1  
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW  //built-in function/method
    },
    added_by: {
      type: DataTypes.STRING,
      allowNull: true   
    },
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderitems'   //lowercase for modelname only
  }
);

//module.exports = OrderItems;
export default OrderItems;