
import express from "express"
const router = express.Router()

import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";


// requests for products
router.get("/", getAllProducts );
// get product by id
router.get("/:id", getProductById );


router.post("/", createProduct );

router.put("/:id", updateProduct );

router.delete("/:id", deleteProduct );

export default router


