import { Router } from 'express'
import { ProductController } from './product.controller'

const router = Router()

router.put('/:productId', ProductController.update)
router.post('/', ProductController.update)
router.get('/', ProductController.getAll)
router.get('/:productId', ProductController.getSingle)

export const ProductsRoute = router
