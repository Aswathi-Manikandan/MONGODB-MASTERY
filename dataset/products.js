db.products.insertMany([
    {
        name: "iPhone 15",
        category: "Mobile",
        brand: "Apple",
        price: 69999,
        stock: 25,
        rating: 4.7,
        reviews: 320,
        discount: 10,
        tags: ["smartphone", "5G", "premium"],
        specifications: {
            ram: 6,
            storage: 128,
            color: "Black"
        },
        seller: {
            name: "TechWorld",
            city: "Kochi"
        },
        isAvailable: true,
        createdAt: new Date("2025-01-15")
    },

    {
        name: "Galaxy S24",
        category: "Mobile",
        brand: "Samsung",
        price: 74999,
        stock: 18,
        rating: 4.6,
        reviews: 280,
        discount: 15,
        tags: ["smartphone", "5G", "android"],
        specifications: {
            ram: 8,
            storage: 256,
            color: "Blue"
        },
        seller: {
            name: "SmartZone",
            city: "Kozhikode"
        },
        isAvailable: true,
        createdAt: new Date("2025-02-10")
    },

    {
        name: "MacBook Air M2",
        category: "Laptop",
        brand: "Apple",
        price: 99999,
        stock: 12,
        rating: 4.8,
        reviews: 450,
        discount: 8,
        tags: ["laptop", "apple", "m2"],
        specifications: {
            ram: 8,
            storage: 256,
            color: "Silver"
        },
        seller: {
            name: "TechWorld",
            city: "Kochi"
        },
        isAvailable: true,
        createdAt: new Date("2024-11-20")
    },

    {
        name: "Dell Inspiron 15",
        category: "Laptop",
        brand: "Dell",
        price: 58999,
        stock: 30,
        rating: 4.3,
        reviews: 190,
        discount: 12,
        tags: ["laptop", "windows", "office"],
        specifications: {
            ram: 16,
            storage: 512,
            color: "Black"
        },
        seller: {
            name: "LaptopHub",
            city: "Trivandrum"
        },
        isAvailable: true,
        createdAt: new Date("2024-12-05")
    },

    {
        name: "Sony WH-1000XM5",
        category: "Headphones",
        brand: "Sony",
        price: 29999,
        stock: 40,
        rating: 4.9,
        reviews: 620,
        discount: 20,
        tags: ["headphones", "wireless", "noise-cancelling"],
        specifications: {
            battery: 30,
            color: "Black"
        },
        seller: {
            name: "AudioWorld",
            city: "Kochi"
        },
        isAvailable: true,
        createdAt: new Date("2024-10-15")
    },

    {
        name: "AirPods Pro 2",
        category: "Headphones",
        brand: "Apple",
        price: 24999,
        stock: 35,
        rating: 4.7,
        reviews: 510,
        discount: 10,
        tags: ["earbuds", "wireless", "apple"],
        specifications: {
            battery: 24,
            color: "White"
        },
        seller: {
            name: "TechWorld",
            city: "Kochi"
        },
        isAvailable: true,
        createdAt: new Date("2025-01-25")
    },

    {
        name: "iPad Air",
        category: "Tablet",
        brand: "Apple",
        price: 54999,
        stock: 20,
        rating: 4.5,
        reviews: 210,
        discount: 5,
        tags: ["tablet", "apple", "portable"],
        specifications: {
            ram: 8,
            storage: 128,
            color: "Blue"
        },
        seller: {
            name: "SmartZone",
            city: "Kozhikode"
        },
        isAvailable: true,
        createdAt: new Date("2024-09-10")
    },

    {
        name: "OnePlus 12",
        category: "Mobile",
        brand: "OnePlus",
        price: 64999,
        stock: 22,
        rating: 4.4,
        reviews: 175,
        discount: 18,
        tags: ["smartphone", "5G", "android"],
        specifications: {
            ram: 12,
            storage: 256,
            color: "Green"
        },
        seller: {
            name: "MobileWorld",
            city: "Trivandrum"
        },
        isAvailable: true,
        createdAt: new Date("2025-03-12")
    },

    {
        name: "Samsung Galaxy Tab S9",
        category: "Tablet",
        brand: "Samsung",
        price: 79999,
        stock: 10,
        rating: 4.6,
        reviews: 160,
        discount: 10,
        tags: ["tablet", "android", "5G"],
        specifications: {
            ram: 12,
            storage: 256,
            color: "Gray"
        },
        seller: {
            name: "SmartZone",
            city: "Kozhikode"
        },
        isAvailable: true,
        createdAt: new Date("2024-08-18")
    },

    {
        name: "Logitech MX Master 3S",
        category: "Accessories",
        brand: "Logitech",
        price: 8999,
        stock: 50,
        rating: 4.8,
        reviews: 380,
        discount: 25,
        tags: ["mouse", "wireless", "productivity"],
        specifications: {
            battery: 70,
            color: "Black"
        },
        seller: {
            name: "ComputerWorld",
            city: "Kochi"
        },
        isAvailable: true,
        createdAt: new Date("2024-07-22")
    },

    {
        name: "HP Pavilion 15",
        category: "Laptop",
        brand: "HP",
        price: 67999,
        stock: 15,
        rating: 4.2,
        reviews: 140,
        discount: 15,
        tags: ["laptop", "windows", "office"],
        specifications: {
            ram: 16,
            storage: 512,
            color: "Silver"
        },
        seller: {
            name: "LaptopHub",
            city: "Trivandrum"
        },
        isAvailable: true,
        createdAt: new Date("2025-02-28")
    },

    {
        name: "Redmi Note 13 Pro",
        category: "Mobile",
        brand: "Xiaomi",
        price: 28999,
        stock: 45,
        rating: 4.1,
        reviews: 125,
        discount: 22,
        tags: ["smartphone", "5G", "android", "budget"],
        specifications: {
            ram: 8,
            storage: 256,
            color: "Black"
        },
        seller: {
            name: "MobileWorld",
            city: "Trivandrum"
        },
        isAvailable: true,
        createdAt: new Date("2025-03-20")
    },

    {
        name: "JBL Live 660NC",
        category: "Headphones",
        brand: "JBL",
        price: 12999,
        stock: 28,
        rating: 4.4,
        reviews: 240,
        discount: 30,
        tags: ["headphones", "wireless", "noise-cancelling"],
        specifications: {
            battery: 50,
            color: "Blue"
        },
        seller: {
            name: "AudioWorld",
            city: "Kochi"
        },
        isAvailable: true,
        createdAt: new Date("2024-06-15")
    },

    {
        name: "Lenovo Tab P12",
        category: "Tablet",
        brand: "Lenovo",
        price: 34999,
        stock: 16,
        rating: 4.3,
        reviews: 130,
        discount: 12,
        tags: ["tablet", "android", "portable"],
        specifications: {
            ram: 8,
            storage: 256,
            color: "Gray"
        },
        seller: {
            name: "SmartZone",
            city: "Kozhikode"
        },
        isAvailable: true,
        createdAt: new Date("2024-11-05")
    }
])