import express from "express";
export const app = express();
import dotenv from "dotenv";
dotenv.config();
import main from "./model/connection.mjs";
import addProductRouter from "./router/addProducts.mjs";
import updateProductRouter from "./router/updateProducts.mjs";
import deleteProductRouter from "./router/deleteProduct.mjs";
import readProductRouter from "./router/readProducts.mjs";
import readAllProductRouter from "./router/readAllProducts.mjs";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */

app.use("/create", addProductRouter);
app.use(updateProductRouter);
app.use(deleteProductRouter);
app.use( readProductRouter);
app.use("/readAll", readAllProductRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  main()
    .then(() => console.log("data base connection established"))
    .catch((err) => console.log(err));
  console.log(`server at ${port}`);
});
