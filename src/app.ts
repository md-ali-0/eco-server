import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
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
        message: 'Server Running Successfully',
    })
})

// 404 handler
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Route not found')
    next(error)
})

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
        status: false,
        message: err.message || 'Something went wrong',
    })
})

export default app
