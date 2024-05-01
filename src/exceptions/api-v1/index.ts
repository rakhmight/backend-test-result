import { FastifyReply, FastifyRequest } from 'fastify'

export default function (error:Error, rep:FastifyReply, req:FastifyRequest){
    switch (error.message) {
        // General
        case 'bad-req':
            return rep.code(400).send({statusCode: 400, message: `Bad request`})

        // User
        case 'user-not-found':
            return rep.code(404).send({statusCode: 404, message: `User not found`})
    
        default:            
            req.log.error(error);
            return rep.code(500).send({statusCode: 500, message: `Some technical problems on our side. Sorry`})
    }
}