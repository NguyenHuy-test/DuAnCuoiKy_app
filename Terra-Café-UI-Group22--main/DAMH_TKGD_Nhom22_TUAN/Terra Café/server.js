const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "coffee_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("✅ Connected MySQL");
});

// GET sản phẩm
app.get("/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        res.json(result);
    });
});

// ADD sản phẩm
app.post("/products", (req, res) => {
    const { name, price, image, category } = req.body;

    db.query(
        "INSERT INTO products (name, price, image, category) VALUES (?, ?, ?, ?)",
        [name, price, image, category],
        () => res.send("OK")
    );
});

// DELETE
app.delete("/products/:id", (req, res) => {
    db.query("DELETE FROM products WHERE id=?", [req.params.id]);
    res.send("Deleted");
});

// API TẠO ĐƠN HÀNG
app.post("/orders", (req, res) => {
    const { customerName, phone, items, total } = req.body;

    // tạo mã đơn HD + random
    const orderCode = "HD" + Math.floor(100000 + Math.random() * 900000);

    db.query(
        "INSERT INTO orders (order_code, customer_name, phone, items, total) VALUES (?, ?, ?, ?, ?)",
        [orderCode, customerName, phone, JSON.stringify(items), total],
        (err) => {
            if (err) return res.status(500).send(err);

            res.json({
                message: "OK",
                orderCode: orderCode
            });
        }
    );
});

// API LẤY ĐƠN HÀNG
app.get("/orders", (req, res) => {
    db.query("SELECT * FROM orders ORDER BY id DESC", (err, result) => {
        res.json(result);
    });
});

// thêm code
app.use(express.static(__dirname));

// route trang chủ
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => console.log("🚀 Server chạy 3000"));

// chức năng update
app.put("/products/:id", (req, res) => {
  const { name, price, image, category } = req.body;

  const sql = `
    UPDATE products 
    SET name=?, price=?, image=?, category=? 
    WHERE id=?
  `;

  db.query(sql, [name, price, image, category, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Updated" });
  });
});