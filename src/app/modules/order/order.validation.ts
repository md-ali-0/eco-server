import { z } from 'zod'

const orderValidationSchema = z.object({
    email: z.string().email('Invalid email format').optional(),
    productId: z.string().optional(),
    price: z
        .number({
            invalid_type_error: 'Price must be a number',
        })
        .positive({ message: 'Price must be a positive number' })
        .optional(),
    quantity: z
        .number()
        .positive({ message: 'Quantity must be a positive number' })
        .optional(),
})

export default orderValidationSchema
