import { Router } from 'express'

const router = Router()

router.get('/', (req, res)=>{
    console.log('get route')
})

export const ProductsRoute = router
