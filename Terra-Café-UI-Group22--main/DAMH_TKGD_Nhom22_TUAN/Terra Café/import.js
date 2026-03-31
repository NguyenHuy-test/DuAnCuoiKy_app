  const mysql = require("mysql2");

// kết nối DB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "coffee_db"
});

// DATA
  
  const allProducts = [
    // Coffee products
    {
      id: 1,
      name: "Phin Sữa Đá",
      price: 29000,
      category: "coffee",
      image: "./public/c1.jpg",
    },
    {
      id: 2,
      name: "Phin Đen Đá",
      price: 25000,
      category: "coffee",
      image: "./public/c3.jpg",
    },
    {
      id: 3,
      name: "Bạc Sỉu Đá",
      price: 29000,
      category: "coffee",
      image: "./public/c2.jpg",
    },
    {
      id: 4,
      name: "Latte Đá",
      price: 45000,
      category: "coffee",
      image: "./public/c4.jpg",
    },
    {
      id: 5,
      name: "Caramel Macchiato",
      price: 55000,
      category: "coffee",
      image: "./public/c6.jpg",
    },
    {
      id: 6,
      name: "Cappuccino",
      price: 45000,
      category: "coffee",
      image: "./public/c4.jpg",
    },
    {
      id: 7,
      name: "Americano",
      price: 39000,
      category: "coffee",
      image: "./public/c5.jpg",
    },
    {
      id: 8,
      name: "Phin Sữa Nóng",
      price: 29000,
      category: "coffee",
      image: "./public/c1.jpg",
    },
    {
      id: 9,
      name: "Phin Đen Nóng",
      price: 25000,
      category: "coffee",
      image: "./public/c3.jpg",
    },
    {
      id: 10,
      name: "Bạc Xỉu Nóng",
      price: 29000,
      category: "coffee",
      image: "./public/c2.jpg",
    },
    {
      id: 11,
      name: "Mocha Nóng",
      price: 49000,
      category: "coffee",
      image: "./public/c6.jpg",
    },
    {
      id: 12,
      name: "Latte Nóng",
      price: 45000,
      category: "coffee",
      image: "./public/c4.jpg",
    },

    // Tea products
    {
      id: 13,
      name: "Trà Sen Vàng",
      price: 45000,
      category: "tea",
      image: "./public/t1.jpg",
    },
    {
      id: 14,
      name: "Trà Xanh Đậu Đỏ",
      price: 39000,
      category: "tea",
      image: "./public/t2.jpg",
    },
    {
      id: 15,
      name: "Trà Ô Long",
      price: 35000,
      category: "tea",
      image: "./public/t3.jpg",
    },
    {
      id: 16,
      name: "Trà Sữa Thái",
      price: 49000,
      category: "tea",
      image: "./public/t4.jpg",
    },

    // Freeze products
    {
      id: 17,
      name: "Freeze Trà Xanh",
      price: 55000,
      category: "freeze",
      image: "./public/t5.jpg",
    },
    {
      id: 18,
      name: "Freeze Chocolate",
      price: 59000,
      category: "freeze",
      image: "./public/t6.jpg",
    },
    {
      id: 19,
      name: "Freeze Caramel",
      price: 59000,
      category: "freeze",
      image: "./public/t7.jpg",
    },

    // Food products
    {
      id: 20,
      name: "Bánh Mì Thịt Nướng",
      price: 35000,
      category: "food",
      image: "./public/img1.jpg",
    },
    {
      id: 21,
      name: "Bánh Croissant",
      price: 25000,
      category: "food",
      image: "./public/img2.jpg",
    },
    {
      id: 22,
      name: "Salad Gà",
      price: 65000,
      category: "food",
      image: "./public/img3.jpg",
    },
  ];

  // map category
function mapCategory(cat) {
  switch(cat) {
    case "coffee": return "Cà phê";
    case "tea": return "Trà";
    case "freeze": return "Freeze";
    case "food": return "Khác";
    default: return "Khác";
  }
}

// insert
allProducts.forEach(p => {
  const sql = `
    INSERT INTO products (name, price, image, category)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [
    p.name,
    p.price,
    p.image,
    mapCategory(p.category)
  ], (err) => {
    if (err) console.log(err);
    else console.log("Đã thêm:", p.name);
  });
});