import { z } from 'zod'

const inventoryValidationSchema = z.object({
    quantity: z.number().min(0, 'Quantity can not negative.').optional(),
    inStock: z.boolean().optional(),
})

const variantsValidationSchema = z.object({
    type: z.string({
        required_error: 'type is required',
        invalid_type_error: 'type must be a string',
    }),
    value: z.string({
        required_error: 'Value is required',
        invalid_type_error: 'Value must be a string',
    }),
})

const ProductValidationSchema = z.object({
    name: z
        .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
        .optional(),
    description: z
        .string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        })
        .optional(),
    price: z
        .number({
            required_error: 'Price is required',
            invalid_type_error: 'price must be a number',
        })
        .positive('Price must be positive.')
        .optional(),
    category: z
        .string({
            required_error: 'Category is required',
            invalid_type_error: 'Category must be a string',
        })
        .optional(),
    tags: z.array(z.string().min(1)).min(1, 'Tags are required.').optional(),
    variants: z.array(variantsValidationSchema).optional(),
    inventory: inventoryValidationSchema,
})

export default ProductValidationSchema
