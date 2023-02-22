import mongoose from "mongoose";

mongoose.set("strictQuery", false);
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/product-category-db");
}

export default main;
