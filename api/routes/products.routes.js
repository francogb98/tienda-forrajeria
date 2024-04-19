import { Router } from "express";

const routeProducts = Router();

routeProducts.get("/", (req, res) => {
  res.send("Get list products");
});
routeProducts.post("/", (req, res) => {
  res.send("Create a product");
});
routeProducts.patch("/", (req, res) => {
  res.send("Edit a product");
});
routeProducts.delete("/", (req, res) => {
  res.send("Delete a product");
});

export default routeProducts;
