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

// globalErrorHandler
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || 'error';

//     res.status(err.statusCode).json({
//         success: false,
//         message: err.message || 'Something went wrong',
//     });
// });

// app.all('*', (req: Request, res: Response, next: NextFunction) => {
//     next(new Error(`Cannot find ${req.originalUrl} on this server!`));
// });

export default app
