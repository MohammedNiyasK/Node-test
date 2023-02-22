import express from "express";
import readAllProductController from "../controllers/readAll-product-controller.mjs";

const router = express.Router();

router.get("/", readAllProductController);

export default router;