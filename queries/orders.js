
//Q1. Display all orders.
db.orders.find()
//Q2. Display only one order.
db.orders.findOne()
//Q3. Find order with orderId ORD1001.
db.orders.findOne({ orderId: "ORD1001" })
//Q4. Find all orders from Kochi customers.
db.orders.find({ "customer.city": "Kochi" })
//Q5. Find all delivered orders.
db.orders.find({ orderStatus: "Delivered" })
//Q6. Find all cancelled orders.
db.orders.find({ orderStatus: "Cancelled" })
//Q7. Find all paid orders.
db.orders.find({ paymentStatus: "Paid" })
//Q8. Find all pending payments.
db.orders.find({ paymentStatus: "Pending" })
//Q9. Find orders paid using UPI.
db.orders.find({ paymentMethod: "UPI" })
//Q10. Find orders paid using Card.
db.orders.find({ paymentMethod: "Card" })

PROJECTION

//Q11. Display only orderId and customer name.
db.orders.find(
    {},
    {
        _id: 0,
        orderId: 1,
        "customer.name": 1
    }
)
//Q12. Display orderId and totalAmount only.
db.orders.find(
    {},
    {
        _id: 0,
        orderId: 1,
        totalAmount: 1
    }
)
//Q13. Display customer name, city and order status.
db.orders.find(
    {},
    {
        _id: 0,
        "customer.name": 1,
        "customer.city": 1,
        orderStatus: 1
    }
)

//COMPARISON OPERATORS

//Q14. Find orders greater than ₹70,000.
db.orders.find({
    totalAmount: { $gt: 70000 }
})
//Q15. Find orders less than ₹50,000.
db.orders.find({
    totalAmount: { $lt: 50000 }
})
//Q16. Find orders greater than or equal to ₹70,000.
db.orders.find({
    totalAmount: { $gte: 70000 }
})
//Q17. Find orders between ₹50,000 and ₹80,000.
db.orders.find({
    totalAmount: {
        $gte: 50000,
        $lte: 80000
    }
})
//Q18. Find orders not equal to ₹99,999.
db.orders.find({
    totalAmount: { $ne: 99999 }
})
//Q19. Find orders with total amount ₹43,998 or ₹57,998.
db.orders.find({
    totalAmount: {
        $in: [43998, 57998]
    }
})
//Q20. Find orders whose total amount is not ₹43,998 or ₹57,998.
db.orders.find({
    totalAmount: {
        $nin: [43998, 57998]
    }
})

//LOGICAL OPERATORS

//Q21. Find delivered orders from Kochi.
db.orders.find({
    $and: [
        { "customer.city": "Kochi" },
        { orderStatus: "Delivered" }
    ]
})

// also write:

db.orders.find({
    "customer.city": "Kochi",
    orderStatus: "Delivered"
})
//Q22. Find orders that are either Delivered or Shipped.
db.orders.find({
    $or: [
        { orderStatus: "Delivered" },
        { orderStatus: "Shipped" }
    ]
})
//Q23. Find orders from Kochi or Trivandrum.
db.orders.find({
    $or: [
        { "customer.city": "Kochi" },
        { "customer.city": "Trivandrum" }
    ]
})
//Q24. Find orders that are not Cancelled.
db.orders.find({
    orderStatus: { $ne: "Cancelled" }
})
//Q25. Find orders that are either cancelled or pending payment.
db.orders.find({
    $or: [
        { orderStatus: "Cancelled" },
        { paymentStatus: "Pending" }
    ]
})
//Q26. Find orders above ₹70,000 AND paid.
db.orders.find({
    totalAmount: { $gt: 70000 },
    paymentStatus: "Paid"
})
//Q27. Find orders below ₹50,000 OR cancelled.
db.orders.find({
    $or: [
        { totalAmount: { $lt: 50000 } },
        { orderStatus: "Cancelled" }
    ]
})
//Q28. Find orders that are NOT cancelled AND NOT pending.
db.orders.find({
    orderStatus: { $ne: "Cancelled" },
    paymentStatus: { $ne: "Pending" }
})