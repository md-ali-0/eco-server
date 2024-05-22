import { Router } from "express";
import { OrderRouter } from "../modules/order/order.route";
import { ProductsRoute } from "../modules/product/product.route";

const router = Router()

router.use('/products', ProductsRoute)
router.use('/products', OrderRouter)

export default router