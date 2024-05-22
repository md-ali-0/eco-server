import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router()

router.get('/', OrderController.getAllOrders)

export const OrderRouter = router