import { 
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyPluginAsync 
} from 'fastify'
import fp from 'fastify-plugin'
import APIError from '../../exceptions/api-v1'
import { GetItemsSchema } from './schema'
import { getItems } from '../../services/item-service/ItemService'

const UserRoutes: FastifyPluginAsync = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {


    fastify.get('/api/v1/items', { schema: GetItemsSchema }, async (req, rep) => {
        try {
            const { redis } = fastify
            const itemsData = await getItems(redis)

            if(itemsData){
                return rep.code(200).send({statusCode: 200, data: { items: itemsData.cachedItems } })
            }

        } catch (error) {
            return APIError(error as Error, rep, req)
        }
    })

}

export default fp(UserRoutes)