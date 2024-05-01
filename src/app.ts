// modules
import fastify, { FastifyInstance } from 'fastify'
import 'dotenv/config'

//routes
import ItemRoute from './routes/item-route/ItemRoute'
import BalanceRoute from './routes/balance-route/BalanceRoute'

//plugins
import { postgresParams } from './plugins/postgres'
import { corsParams } from './plugins/cors'
import { swaggerParams } from './plugins/swagger'
import { swaggerUIParams } from './plugins/swagger/ui'
import { redisParams } from './plugins/redis'

export const build = (opts = {}) => {
    const app = fastify(opts)
    checkServerEnv(app)

    app.register(require('@fastify/cors'), corsParams)
    app.register(require('@fastify/postgres'), postgresParams)
    app.register(require('@fastify/swagger'), swaggerParams)
    app.register(require('@fastify/swagger-ui'), swaggerUIParams)
    app.register(require('@fastify/redis'), redisParams)
    
    app.register(ItemRoute)
    app.register(BalanceRoute)

    app.after()
    return app
}

function checkServerEnv(app:FastifyInstance){
    if(!process.env.SERVER_PORT){
        app.log.fatal('The environment variable responsible for the server port is not set')
        process.exit(1)
    }
    
    if(!process.env.PG_HOST || !process.env.PG_PORT || !process.env.PG_USER || !process.env.PG_PASSWORD || !process.env.PG_DATABASE){
        app.log.fatal('The environment variable responsible for connecting to the MongoDB database is not set')
        process.exit(1)
    }
}