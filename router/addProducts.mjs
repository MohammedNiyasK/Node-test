import express from "express";
import addProductController from "../controllers/add-product-controller.mjs";

const router = express.Router();

router.post("/", addProductController);

export default router;
