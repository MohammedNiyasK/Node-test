import express from "express";
import deleteProductController from "../controllers/delete-product-controller.mjs";

const router = express.Router();

router.delete("/delete/:productName", deleteProductController);

export default router;