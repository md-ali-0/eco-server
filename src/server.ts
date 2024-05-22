import http, { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

let server: Server

async function main() {
    const port = config.port
    try {
        await mongoose.connect(config.database_uri as string, {
            dbName: config.database_name,
        })
        console.log('Database Connected Successfully')
        server = http.createServer(app)
        server.listen(port, () => {
            console.log(`Server Running > URL : http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

main()
