//   //alexis 12/1/22 add view to mysql once data is loaded so we can use it i a get route
// //need addl view but sequelize doesn't support views so need 3rd party library to accomplish this



//   // select o.order_id as 'Order #', DATE_FORMAT(order_date, "%M %d %Y") as 'Order Dt', i.item_name as 'Food Name', oi.quantity as 'Qty Ordered', CONCAT('$',FORMAT(i.item_cost,2,'en-us')) as 'Item Cost',  
// // CONCAT('$',FORMAT((i.item_cost * oi.quantity),2,'en-us')) as 'Line Item Cost'
// // from orders o
// // inner join 
// // orderitems oi
// // inner JOIN items i ON oi.item_id = i.item_id
// // on o.order_id = oi.order_id
// // where customer_id = 1  /*mary 1234*/
// // order by o.order_id, oi.item_id

// const view_name = 'vwCustomerOrders';
// const query = "select o.order_id as 'Order #', DATE_FORMAT(order_date, '%M %d %Y') as 'Order Dt', i.item_name as 'Food Name'," +
// "oi.quantity as 'Qty Ordered', CONCAT('$',FORMAT(i.item_cost,2,'en-us')) as 'Item Cost', CONCAT('$',FORMAT((i.item_cost * oi.quantity),2,'en-us')) as 'Total Line Cost'" +
// "from orders o " + 
// "inner join " +
// "orderitems oi " +
// "inner JOIN items i ON oi.item_id = i.item_id " +
// "on o.order_id = oi.order_id " +
// "where customer_id = 1 " +
// "order by o.order_id, oi.item_id;"
// // console.log(view_name);
// // console.log(query);
// // module.exports = {
// //   up: function (database, Sequelize) {
// //     return database.query(`CREATE VIEW ${view_name} AS ${query}`);
// //   },
// //   down: function (database, Sequelize) {
// //     return database.query(`DROP VIEW ${view_name}`);
// //   }
// // }
// //Sync field names below with alias names in sql query above
// module.exports = (sequelize, DataTypes) => {
//   const vwCustomerOrders = sequelize.define('vwCustomerOrders', {
//     'Order #': DataTypes.INTEGER,
//     'Order Dt': DataTypes.DATE,
//     'Food Name': DataTypes.STRING,
//     'Qty Ordered': DataTypes.INTEGER,
//     'Item Cost': DataTypes.DECIMAL,
//     'Total Line Cost': DataTypes.DECIMAL
//   }, {
//     treatAsView: true,
//     viewDefinition: 
//       `CREATE VIEW "vwCustomerOrders" AS "select o.order_id as 'Order #', DATE_FORMAT(order_date, '%M %d %Y') as 'Order Dt', i.item_name as 'Food Name'," +
//       "oi.quantity as 'Qty Ordered', CONCAT('$',FORMAT(i.item_cost,2,'en-us')) as 'Item Cost', CONCAT('$',FORMAT((i.item_cost * oi.quantity),2,'en-us')) as 'Total Line Cost'" +
//       "from orders o " + 
//       "inner join " +
//       "orderitems oi " +
//       "inner JOIN items i ON oi.item_id = i.item_id " +
//       "on o.order_id = oi.order_id " +
//       "where customer_id = 1 " +
//       "order by o.order_id, oi.item_id;"`
//   });

//   return vwCustomerOrders;
// };

    //alexis 12/1/22
    const results = await sequelize.query(
      "select o.order_id as 'Order #', DATE_FORMAT(order_date, '%M %d %Y') as 'Order Dt', i.item_name as 'Food Name'," +
      "oi.quantity as 'Qty Ordered', CONCAT('$',FORMAT(i.item_cost,2,'en-us')) as 'Item Cost', CONCAT('$',FORMAT((i.item_cost * oi.quantity),2,'en-us')) as 'Total Line Cost'" +
     "from orders o " + 
      "inner join " +
      "orderitems oi " +
      "inner JOIN items i ON oi.item_id = i.item_id " +
      "on o.order_id = oi.order_id " +
      "where customer_id = 1 " +
      "order by o.order_id, oi.item_id;", 
        { 
          type: sequelize.QueryTypes.SELECT 
        }
      );
      
      console.log(results) // returned rows
     //end alexis 12/1/22