import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import router from './app/routes'

const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// all routes
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: true,
        massage: 'Server Running Successfully',
    })
})

export default app
