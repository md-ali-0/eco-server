import { IOrder } from './order.interface'
import { Order } from './order.model'

const getAllOrders = async (): Promise<IOrder[]> => {
    const result = await Order.find()
    return result
}

export const OrderService = {
    getAllOrders,
}
