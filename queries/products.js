// Count all products
db.products.countDocuments()

//Display products in readable format.
db.products.find().pretty()

//Find the iPhone 15.
db.products.find({ name: "iPhone 15" })

//Find all Apple products
db.products.find({ brand: "Apple" })

//Find all Mobile products.
db.products.find({ category: "Mobile" })

//Find all products from Kochi.
db.products.find({ "seller.city": "Kochi" })

//find all Samsung products.
db.products.find({ brand: "Samsung" })

//Find products with rating exactly 4.8.
db.products.find({ rating: 4.8 })

//Find products with stock exactly 20.
db.products.find({ stock: 20 })

//Price greater than ₹50,000.
db.products.find({ price: { $gt: 50000 } })

//Products that are not Apple.
db.products.find({ brand: { $ne: "Apple" } })

//Products from Apple or Samsung
db.products.find({ brand: { $in: ["Apple", "Samsung"] } })

//Products costing more than ₹50,000 AND rating above 4.5
db.products.find({ $and: [{ price: { $gt: 50000 } }, { rating: { $gt: 4.5 } }] })

//Products costing less than ₹30,000 OR rating above 4.8.
db.products.find({ $or: [{ price: { $lt: 30000 } }, { rating: { $gt: 4.8 } }] })

//Apple products with rating above 4.5.
db.products.find({ $and: [{ brand: 'Apple' }, { rating: { $gt: 4.5 } }] })

//Products from Kochi AND stock greater than 20.
db.products.find({ $and: [{ "seller.city": 'Kochi' }, { stock: { $gt: 20 } }] })

//Products where brand is not Apple
db.products.find({ brand: { $ne: "Apple" } })
db.products.find({ brand: { $not: { $eq: "Apple" } } })

//Products that are neither Mobile nor Laptop.
db.products.find({ $nor: [{ category: 'Mobile' }, { category: 'Laptop' }] }).

  //Show only product name and price
  db.products.find({}, { name: 1, price: 1, _id: 0 })

//Sort products by price ascending
db.products.find({}).sort({ price: 1 })

//Sort by rating highest first
db.products.find({}).sort({ rating: -1 })

//Get the 5 most expensive products.
db.products.find({}).sort({ price: -1 }).limit(5)

//Skip the first 5 products.
db.products.find({}).skip(5)

//Get products 6–10.
db.products.find({}).skip(5).limit(10)

//Find all unique brands
db.products.distinct("brand")

//Find all unique categories
db.products.distinct("category")

//Count Apple products.
db.products.find({ brand: "Apple" }).count()
db.products.countDocuments({ brand: "Apple" })

//Find products having the 5G tag.
db.products.find({
  tags: "5G"
})

//Find products having both 5G and android
db.products.find({ tags: { $all: ["5G", "android"] } })

//Find products having exactly 3 tags.
db.products.find({ tags: { $size: 3 } })

//Find products having smartphone OR table
db.products.find({ tags: { $in: ["smartphone", "tablet"] } })

//Find products with 8GB RAM.
db.products.find({ "specifications.ram": 8 })

//Find products where discount exists
db.products.find({ discount: { $exists: true } })













































