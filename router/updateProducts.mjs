import express from "express";
import updateProductController from "../controllers/update-product-controller.mjs";

const router = express.Router();

router.patch("/update/:productName", updateProductController);

export default router;