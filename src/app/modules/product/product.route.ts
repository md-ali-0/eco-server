import { Router } from 'express'
import { ProductController } from './product.controller'

const router = Router()

router.put('/:productId', ProductController.updateProduct)
router.post('/', ProductController.createProduct)
router.delete('/:productId', ProductController.deleteProduct)
router.get('/', ProductController.getAll)
router.get('/:productId', ProductController.getSingle)

export const ProductsRoute = router
