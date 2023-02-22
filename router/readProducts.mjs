import express from "express";
import readProductController from "../controllers/read-product-controller.mjs";

const router = express.Router();

router.get("/read/:productName", readProductController);

export default router;