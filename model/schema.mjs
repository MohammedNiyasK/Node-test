import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  qtyPerUnit: {
    type: Number,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  unitInStock: {
    type: Number,
    required: true,
  },
  discontinued: {
    type: Boolean,
    required: true,
  },
  categoryId: {
    type: Number,
    ref: 'Category'
  }
});

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Number,
    ref: 'Product'
  }
});

export const Product = mongoose.model("Product", productSchema);
export const Category = mongoose.model("Category", categorySchema);
