import { FastifyLoggerInstance, FastifyPluginAsync, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from 'fastify'
import { Pool } from 'pg';
import { FastifyRedis } from '@fastify/redis'

declare module 'fastify' {
  export interface FastifyInstance<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger = FastifyLoggerInstance
> {

    pg: Pool,
    redis: FastifyRedis 

  }
}
