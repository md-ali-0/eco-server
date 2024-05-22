import { Request, Response } from 'express'
import { ProductService } from './product.service'

const create = async (req: Request, res: Response) => {
    const payload = req.body

    try {
        const product = await ProductService.create(payload)
        res.status(201).json({
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

const update = async (req: Request, res: Response) => {
    const id = req.params.productId
    const upDoc = req.body
    try {
        const product = await ProductService.update(id, upDoc)
        res.status(202).json({
            success: true,
            message: 'Product updated successfully!',
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
        const products = await ProductService.getAll()
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
const getSingle = async (req: Request, res: Response) => {
    const id = req.params.productId
    try {
        const product = await ProductService.getSingle(id)
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
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

export const ProductController = {
    create,
    getAll,
    getSingle,
    update,
}
