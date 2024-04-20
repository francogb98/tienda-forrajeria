import express from "express";
import routeProducts from "./routes/products.routes.js";

import "./db.js";


const app = express();
const port = 3000;

app.use("/products", routeProducts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
