import { 
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyPluginAsync 
} from 'fastify'
import fp from 'fastify-plugin'
import APIError from '../../exceptions/api-v1'
import { BalanceWriteOffSchema } from './schema'
import { writeOffBalance } from '../../services/balance-service/BalanceService'

const UserRoutes: FastifyPluginAsync = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {


    fastify.post<RouteWithData<ReqData<BalanceWriteOff>>>('/api/v1/balance/write-off', { schema: BalanceWriteOffSchema }, async (req, rep) => {
        try {

            const balanceData = await writeOffBalance(req.body.data.userID, req.body.data.amount, fastify.pg)

            if(balanceData){
                req.log.info({ actor: 'Route: user' }, `Successfully write of from user balance, ID: ${balanceData.id}`)
                return rep.code(200).send({statusCode: 200, data: { balanceData } })
            }

        } catch (error) {
            return APIError(error as Error, rep, req)
        }
    })

}

export default fp(UserRoutes)