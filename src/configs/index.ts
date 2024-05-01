import { getDate } from "../utils/getDate"
import pino from 'pino'
import path from 'path'

const transport = pino.transport({
  targets: [
    // это плохо, но я решил не замарачиваться на счёт директориев, где будут хранится логи
    {
      target: 'pino/file',
      options: {
        destination: path.join(__dirname, `../logs/general/logs-${getDate()}.log`),
      }
    },
    {
      target: 'pino/file',
      level: 'error',
      options: {
        destination: path.join(__dirname, `../logs/errors/errors-logs-${getDate()}.log`),
      }
    },
    {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  ]
})

export const fastifyConfig = {
    logger: pino(
      transport
    ),
    bodyLimit: 100 * 1024 * 1024
}