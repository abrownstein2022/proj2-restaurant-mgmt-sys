const router = require("express").Router();
const { Orders, OrderItems, Items } = require("../../models");
const withAuth = require("../../utils/auth");
const logger = require("../../utils/logger.js");

//&                                                                                                             
//$ Get list of current customer's orders
router.get("/view-orders", async (req, res) => {
  let orderData = await Orders.find({
    where: {
      customer_id: req.session.customer_id,
    },
  });

  res.render("orderspage", {
    orders: orderData,
  });
});

//&                                                                                                             
//$ Place order
router.post("/place-order", async (req, res) => {
  try {
    // get the current user
    let { customer_id } = req.session


    //+ Get the id from the orders table
    let orderId = await Orders.create({customer_id})

    let orderItems = await OrderItems.create





    // get the id of the order from handlebars name value
    let thisOrderId = req.body.customerOrder;

    // grab the array of orders for this user
    let existingOrderIds = await Customers.findOne({
      where: {
        customer_id
      },
    });

    // add the new id to the array
    let newOrders = [...existingOrderIds, thisOrderId];

    // update the customers table
    await Customers.update({
      where: {
        customer_id
      },
      orders: newOrders,
    });

    res.status(200).json("The order was placed");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
