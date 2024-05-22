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
    const newDoc: any = {}
    if (upDoc?.name !== undefined) {
        newDoc['name'] = upDoc.name
    }
    if (upDoc?.description !== undefined) {
        newDoc['description'] = upDoc.description
    }
    if (upDoc?.price !== undefined) {
        newDoc['price'] = upDoc.price
    }
    if (upDoc?.category !== undefined) {
        newDoc['category'] = upDoc.category
    }
    if (upDoc?.tags !== undefined) {
        newDoc['tags'] = upDoc.tags
    }
    if (upDoc?.variants !== undefined) {
        newDoc['variants'] = upDoc.variants
    }
    if (upDoc?.inventory?.inStock !== undefined) {
        newDoc['inventory.inStock'] = upDoc.inventory.inStock
    }
    if (upDoc?.inventory?.quantity !== undefined) {
        newDoc['inventory.quantity'] = upDoc.inventory.quantity
    }

    const result = await Product.findOneAndUpdate(
        { _id: new Types.ObjectId(id) },
        {
            $set: newDoc,
        },
        { new: true },
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
