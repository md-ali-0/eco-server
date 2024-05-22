import { Types } from 'mongoose'
import { IProduct } from './product.interface'
import { Product } from './product.model'

const create = async (payload: IProduct): Promise<IProduct | null> => {
    const result = await Product.create(payload)
    return result
}

const update = async (
    id: string,
    upDoc: IProduct,
): Promise<IProduct | null> => {
    const result = await Product.findOneAndUpdate(
        { _id: new Types.ObjectId(id) },
        upDoc,
    )
    return result
}

const getAll = async (): Promise<IProduct[]> => {
    const result = await Product.find()
    return result
}
const getSingle = async (id: string): Promise<IProduct | null> => {
    const result = await Product.findOne({ _id: new Types.ObjectId(id) })
    return result
}

export const ProductService = {
    create,
    getAll,
    getSingle,
    update,
}
