import { IProduct } from './product.interface'
import { Product } from './product.model'

const create = async (payload: IProduct): Promise<IProduct> => {
    const result = await Product.create(payload)
    return result
}

const getAll = async (): Promise<IProduct[]> => {
    const result = await Product.find()
    return result
}

export const ProductService = {
    create,
    getAll,
}
