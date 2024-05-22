import { Schema, model } from 'mongoose'
import { IInventory, IProduct, IVariants } from './product.interface'

const inventorySchema = new Schema<IInventory>(
    {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true },
    },
    {
        _id: false,
        versionKey: false,
    },
)
const variantsSchema = new Schema<IVariants>(
    {
        type: { type: String, required: true },
        value: { type: String, required: true },
    },
    {
        _id: false,
        versionKey: false,
    },
)

const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        tags: { type: [String], required: true },
        variants: [variantsSchema],
        inventory: inventorySchema,
    },
    {
        versionKey: false,
    },
)

export const Product = model<IProduct>('product', productSchema)
