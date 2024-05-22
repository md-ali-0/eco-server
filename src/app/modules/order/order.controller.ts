import { Request, Response } from 'express'
import { OrderService } from './order.service'

const createOrder = async (req: Request, res: Response) => {}
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await OrderService.getAllOrders()
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: orders,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.massage || 'Order not found',
            error: error,
        })
    }
}

export const OrderController = { createOrder, getAllOrders }
