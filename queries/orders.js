
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