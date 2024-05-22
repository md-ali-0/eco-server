import { z } from 'zod'

const inventoryValidationSchema = z.object({
    quantity: z.number().min(0, 'Quantity can not negative.').optional(),
    inStock: z.boolean().optional(),
})

const variantsValidationSchema = z.object({
    type: z.string().min(1, 'Type is required.'),
    value: z.string().min(1, 'Value is required.'),
})

const ProductValidationSchema = z.object({
    name: z.string().min(1, 'Name is required.').optional(),
    description: z.string().min(1, 'Description is required.').optional(),
    price: z
        .number({
            required_error: 'Price is required',
            invalid_type_error: 'price must be a number',
        })
        .positive('Price must be positive.')
        .optional(),
    category: z.string().min(1, 'Category is required.').optional(),
    tags: z.array(z.string().min(1)).min(1, 'Tags are required.').optional(),
    variants: z.array(variantsValidationSchema).optional(),
    inventory: inventoryValidationSchema,
})

export default ProductValidationSchema
