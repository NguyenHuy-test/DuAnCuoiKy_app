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

app.listen(3000, () => console.log("🚀 Server chạy 3000"));