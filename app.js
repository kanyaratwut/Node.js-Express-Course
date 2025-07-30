const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/"))); //เรียกใช้ path ไปหาไฟล์ public

//set ejs
app.set("views", "./src/views");
app.set("view engine", "ejs");

//การสร้าง Router
productRouter.route("/").get((req, res) => {
  res.render("products", products);
});

app.use("/products", productRouter);

app.get("/", (req, res) => {
  //   res.send("Hello Kanyarat!"); //ตัว static ไม่ทำงานจะมาแสดงผลตรงนี้ (่ตัว static คือ public ที่ index.js)

  //ejs จะเขียนแบบนี้
  res.render("index", {
    username: "Kanyarat",
    customers: ["sompop", "chanom", "snowy"],
  });
}); //ใช้สำหรับจัดการ request ที่เข้ามาหน้า / จะส่งอะไรกลับไป

app.listen(PORT, () => {
  debug(`Example app listening at ` + chalk.green(PORT));
}); //รอฟังที่ PORT ที่กําหนด
