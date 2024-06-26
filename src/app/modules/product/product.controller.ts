import { Request, Response } from 'express'
import { IProduct } from './product.interface'
import { ProductService } from './product.service'
import zodValid from './product.validation'

const createProduct = async (req: Request, res: Response) => {
    const payload = req.body

    try {
        const value = zodValid.parse(payload)
        const product = await ProductService.createProduct(value as IProduct)
        res.status(201).json({
            success: true,
            message: 'Product created successfully!',
            data: product,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong',
            error: error,
        })
    }
}

const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.productId
    const upDoc = req.body

    try {
        const value = zodValid.parse(upDoc)
        const product = await ProductService.updateProduct(
            id,
            value as IProduct,
        )
        res.status(202).json({
            success: true,
            message: 'Product updated successfully!',
            data: product,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong',
            error: error,
        })
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.productId
    try {
        await ProductService.deleteProduct(id)
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong',
            error: error,
        })
    }
}

const getAll = async (req: Request, res: Response) => {
    try {
        let search: string = ''

        if (req.query.searchTerm) {
            search = req.query.searchTerm as string
        }
        const products = await ProductService.getAll(search)
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: products,
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong',
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
            message: error.message || 'Something Went Wrong',
            error: error,
        })
    }
}

export const ProductController = {
    createProduct,
    getAll,
    getSingle,
    updateProduct,
    deleteProduct,
}
