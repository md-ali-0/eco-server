import { Request, Response } from 'express'
import { ProductService } from './product.service'

const create = async (req: Request, res: Response) => {
    const payload = req.body

    try {
        const product = ProductService.create(payload)
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: product,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.massage || 'Something Went Wrong',
            error: error,
        })
    }
}

const getAll = async (req: Request, res: Response) => {
    try {
        const products = ProductService.getAll()
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: products,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.massage || 'Something Went Wrong',
            error: error,
        })
    }
}

export const ProductController = {
    create,
    getAll,
}
