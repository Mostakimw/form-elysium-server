const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// middle ware or getting routes
const product_routes = require("./src/routes/products");

app.get("/", (req, res) => {
  res.send("Form Elysium is running");
});

app.use("/api/products", product_routes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} Server running`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
