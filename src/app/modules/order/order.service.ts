import { Types } from 'mongoose'
import { Product } from '../product/product.model'
import { IOrder } from './order.interface'
import { Order } from './order.model'

const createOrder = async (payload: IOrder): Promise<IOrder | null> => {
    try {
        const findProduct = await Product.findOne({
            _id: new Types.ObjectId(payload.productId),
            'inventory.quantity': { $gte: payload.quantity },
        })

        if (findProduct === null) {
            throw new Error('Insufficient quantity available in inventory')
        }
        findProduct.inventory.quantity -= payload.quantity
        findProduct.inventory.inStock = findProduct.inventory.quantity > 0

        await findProduct.save()

        const result = await Order.create(payload)
        return result
    } catch (error) {
        throw error
    }
}

const getAllOrders = async (search: { email?: string }): Promise<IOrder[]> => {
    const result = await Order.find(search)
    if (result.length <= 0) {
        throw new Error('Order not found')
    }
    return result
}

export const OrderService = {
    createOrder,
    getAllOrders,
}
