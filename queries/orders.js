
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

//SORT / LIMIT / SKIP

//Q29. Sort orders by total amount ascending.
db.orders.find().sort({
    totalAmount: 1
})
//Q30. Sort orders by total amount descending.
db.orders.find().sort({
    totalAmount: -1
})
//Q31. Find the highest-value order.
db.orders.find().sort({
    totalAmount: -1
}).limit(1)
//Q32. Find the lowest-value order.
db.orders.find().sort({
    totalAmount: 1
}).limit(1)
//Q33. Find the top 5 highest orders.
db.orders.find().sort({
    totalAmount: -1
}).limit(5)
//Q34. Skip the first 5 orders.
db.orders.find().skip(5)
//Q35. Find the 6th, 7th and 8th highest orders.
db.orders.find()
    .sort({ totalAmount: -1 })
    .skip(5)
    .limit(3)

//COUNT / DISTINCT

//Q36. Count total orders.
db.orders.countDocuments()
//Q37. Count delivered orders.
db.orders.countDocuments({
    orderStatus: "Delivered"
})
//Q38. Count cancelled orders.
db.orders.countDocuments({
    orderStatus: "Cancelled"
})
//Q39. Count orders from Kochi.
db.orders.countDocuments({
    "customer.city": "Kochi"
})
//Q40. Find all different payment methods.
db.orders.distinct("paymentMethod")
//Q41. Find all different order statuses.
db.orders.distinct("orderStatus")
//Q42. Find all different customer cities.
db.orders.distinct("customer.city")


//NESTED DOCUMENT QUESTIONS

//Q43. Find customers from Kerala city Kochi.
db.orders.find({
    "shippingAddress.city": "Kochi"
})
//Q44. Find orders shipped to pincode 682001.
db.orders.find({
    "shippingAddress.pincode": 682001
})
//Q45. Display customer name and shipping city.
db.orders.find(
    {},
    {
        _id: 0,
        "customer.name": 1,
        "shippingAddress.city": 1
    }
)
//Q46. Find orders where customer city and shipping city are both Kochi.
db.orders.find({
    "customer.city": "Kochi",
    "shippingAddress.city": "Kochi"
})