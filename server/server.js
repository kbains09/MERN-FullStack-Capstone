require("dotenv").config();
const knexconfig = require("./knexfile");
const knex = require("knex")(knexconfig[process.env.NODE_ENV]);
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const productsRouter = require("./Routers/productsRouter");
const ordersRouter = require("./Routers/ordersRouter");
const paymentDetailsRouter = require("./Routers/paymentDetailsRouter");
const orderDetailsRouter = require("./Routers/orderDetailsRouter");
const usersRouter = require("./Routers/usersRouter");
const verifyToken = require("./middleware/verifyToken");
const shippingRouter = require("./Routers/shippingRouter");

//Middleware and Routers
app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/payment-details", paymentDetailsRouter);
app.use("/order-details", orderDetailsRouter);
app.use("/users", verifyToken, usersRouter);
app.use("/shipping", shippingRouter);

//Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.get("/", (req, res) => {
  res.send("Hello World!");
}
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);