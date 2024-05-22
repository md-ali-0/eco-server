import { Router } from 'express'
import { ProductController } from './product.controller'

const router = Router()

router.post('/', ProductController.createProduct)
router.put('/:productId', ProductController.updateProduct)
router.delete('/:productId', ProductController.deleteProduct)
router.get('/:productId', ProductController.getSingle)
router.get('/', ProductController.getAll)

export const ProductsRoute = router
