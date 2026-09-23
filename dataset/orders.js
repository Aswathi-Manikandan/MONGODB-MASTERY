use ecommerceDB

db.orders.insertMany([
    {
        orderId: "ORD1001",
        customer: {
            name: "Arun Kumar",
            email: "arun@gmail.com",
            city: "Kochi"
        },
        items: [
            {
                productName: "iPhone 15",
                quantity: 1,
                price: 69999
            },
            {
                productName: "AirPods Pro 2",
                quantity: 1,
                price: 24999
            }
        ],
        totalAmount: 94998,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        shippingAddress: {
            city: "Kochi",
            state: "Kerala",
            pincode: 682001
        },
        orderDate: ISODate("2025-04-01")
    },

    {
        orderId: "ORD1002",
        customer: {
            name: "Rahul Raj",
            email: "rahul@gmail.com",
            city: "Trivandrum"
        },
        items: [
            {
                productName: "MacBook Air M2",
                quantity: 1,
                price: 99999
            }
        ],
        totalAmount: 99999,
        paymentMethod: "Card",
        paymentStatus: "Paid",
        orderStatus: "Shipped",
        shippingAddress: {
            city: "Trivandrum",
            state: "Kerala",
            pincode: 695001
        },
        orderDate: ISODate("2025-04-03")
    },

    {
        orderId: "ORD1003",
        customer: {
            name: "Anjali Nair",
            email: "anjali@gmail.com",
            city: "Kozhikode"
        },
        items: [
            {
                productName: "Galaxy S24",
                quantity: 1,
                price: 74999
            },
            {
                productName: "Logitech MX Master 3S",
                quantity: 1,
                price: 8999
            }
        ],
        totalAmount: 83998,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        shippingAddress: {
            city: "Kozhikode",
            state: "Kerala",
            pincode: 673001
        },
        orderDate: ISODate("2025-04-05")
    },

    {
        orderId: "ORD1004",
        customer: {
            name: "Vishnu S",
            email: "vishnu@gmail.com",
            city: "Kochi"
        },
        items: [
            {
                productName: "Sony WH-1000XM5",
                quantity: 2,
                price: 29999
            }
        ],
        totalAmount: 59998,
        paymentMethod: "Card",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        shippingAddress: {
            city: "Kochi",
            state: "Kerala",
            pincode: 682016
        },
        orderDate: ISODate("2025-04-07")
    },

    {
        orderId: "ORD1005",
        customer: {
            name: "Meera Thomas",
            email: "meera@gmail.com",
            city: "Thrissur"
        },
        items: [
            {
                productName: "iPad Air",
                quantity: 1,
                price: 54999
            }
        ],
        totalAmount: 54999,
        paymentMethod: "Cash on Delivery",
        paymentStatus: "Pending",
        orderStatus: "Processing",
        shippingAddress: {
            city: "Thrissur",
            state: "Kerala",
            pincode: 680001
        },
        orderDate: ISODate("2025-04-10")
    },

    {
        orderId: "ORD1006",
        customer: {
            name: "Akhil Mohan",
            email: "akhil@gmail.com",
            city: "Kannur"
        },
        items: [
            {
                productName: "OnePlus 12",
                quantity: 1,
                price: 64999
            },
            {
                productName: "JBL Live 660NC",
                quantity: 1,
                price: 12999
            }
        ],
        totalAmount: 77998,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Shipped",
        shippingAddress: {
            city: "Kannur",
            state: "Kerala",
            pincode: 670001
        },
        orderDate: ISODate("2025-04-12")
    },

    {
        orderId: "ORD1007",
        customer: {
            name: "Neha Joseph",
            email: "neha@gmail.com",
            city: "Kottayam"
        },
        items: [
            {
                productName: "Dell Inspiron 15",
                quantity: 1,
                price: 58999
            }
        ],
        totalAmount: 58999,
        paymentMethod: "Card",
        paymentStatus: "Paid",
        orderStatus: "Cancelled",
        shippingAddress: {
            city: "Kottayam",
            state: "Kerala",
            pincode: 686001
        },
        orderDate: ISODate("2025-04-14")
    },

    {
        orderId: "ORD1008",
        customer: {
            name: "Sreejith P",
            email: "sreejith@gmail.com",
            city: "Kochi"
        },
        items: [
            {
                productName: "Redmi Note 13 Pro",
                quantity: 2,
                price: 28999
            }
        ],
        totalAmount: 57998,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        shippingAddress: {
            city: "Kochi",
            state: "Kerala",
            pincode: 682020
        },
        orderDate: ISODate("2025-04-16")
    },

    {
        orderId: "ORD1009",
        customer: {
            name: "Devika Menon",
            email: "devika@gmail.com",
            city: "Alappuzha"
        },
        items: [
            {
                productName: "Samsung Galaxy Tab S9",
                quantity: 1,
                price: 79999
            },
            {
                productName: "AirPods Pro 2",
                quantity: 1,
                price: 24999
            }
        ],
        totalAmount: 104998,
        paymentMethod: "Net Banking",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        shippingAddress: {
            city: "Alappuzha",
            state: "Kerala",
            pincode: 688001
        },
        orderDate: ISODate("2025-04-18")
    },

    {
        orderId: "ORD1010",
        customer: {
            name: "Nikhil Das",
            email: "nikhil@gmail.com",
            city: "Ernakulam"
        },
        items: [
            {
                productName: "HP Pavilion 15",
                quantity: 1,
                price: 67999
            }
        ],
        totalAmount: 67999,
        paymentMethod: "UPI",
        paymentStatus: "Pending",
        orderStatus: "Processing",
        shippingAddress: {
            city: "Ernakulam",
            state: "Kerala",
            pincode: 682011
        },
        orderDate: ISODate("2025-04-20")
    },

    {
        orderId: "ORD1011",
        customer: {
            name: "Fathima K",
            email: "fathima@gmail.com",
            city: "Malappuram"
        },
        items: [
            {
                productName: "Lenovo Tab P12",
                quantity: 1,
                price: 34999
            },
            {
                productName: "Logitech MX Master 3S",
                quantity: 1,
                price: 8999
            }
        ],
        totalAmount: 43998,
        paymentMethod: "Cash on Delivery",
        paymentStatus: "Pending",
        orderStatus: "Processing",
        shippingAddress: {
            city: "Malappuram",
            state: "Kerala",
            pincode: 676505
        },
        orderDate: ISODate("2025-04-22")
    },

    {
        orderId: "ORD1012",
        customer: {
            name: "Adarsh B",
            email: "adarsh@gmail.com",
            city: "Palakkad"
        },
        items: [
            {
                productName: "iPhone 15",
                quantity: 1,
                price: 69999
            }
        ],
        totalAmount: 69999,
        paymentMethod: "Card",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        shippingAddress: {
            city: "Palakkad",
            state: "Kerala",
            pincode: 678001
        },
        orderDate: ISODate("2025-04-24")
    },

    {
        orderId: "ORD1013",
        customer: {
            name: "Sneha R",
            email: "sneha@gmail.com",
            city: "Kollam"
        },
        items: [
            {
                productName: "Sony WH-1000XM5",
                quantity: 1,
                price: 29999
            },
            {
                productName: "JBL Live 660NC",
                quantity: 1,
                price: 12999
            }
        ],
        totalAmount: 42998,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Shipped",
        shippingAddress: {
            city: "Kollam",
            state: "Kerala",
            pincode: 691001
        },
        orderDate: ISODate("2025-04-26")
    },

    {
        orderId: "ORD1014",
        customer: {
            name: "Manu Krishnan",
            email: "manu@gmail.com",
            city: "Kochi"
        },
        items: [
            {
                productName: "MacBook Air M2",
                quantity: 1,
                price: 99999
            },
            {
                productName: "Logitech MX Master 3S",
                quantity: 1,
                price: 8999
            }
        ],
        totalAmount: 108998,
        paymentMethod: "Card",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        shippingAddress: {
            city: "Kochi",
            state: "Kerala",
            pincode: 682030
        },
        orderDate: ISODate("2025-04-28")
    },

    {
        orderId: "ORD1015",
        customer: {
            name: "Athira S",
            email: "athira@gmail.com",
            city: "Wayanad"
        },
        items: [
            {
                productName: "Redmi Note 13 Pro",
                quantity: 1,
                price: 28999
            }
        ],
        totalAmount: 28999,
        paymentMethod: "Cash on Delivery",
        paymentStatus: "Pending",
        orderStatus: "Cancelled",
        shippingAddress: {
            city: "Wayanad",
            state: "Kerala",
            pincode: 673121
        },
        orderDate: ISODate("2025-04-30")
    }
])