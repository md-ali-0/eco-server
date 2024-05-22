import { Router } from "express";
import { ProductsRoute } from "../modules/product/product.route";

const router = Router()

router.use('/products', ProductsRoute)

export default router