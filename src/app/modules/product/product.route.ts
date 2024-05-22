import { Router } from 'express'
import { ProductController } from './product.controller'

const router = Router()

router.get('/', ProductController.getAll)

export const ProductsRoute = router
