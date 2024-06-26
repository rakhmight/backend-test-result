import { BadRequestError, InternalServerError, UserNotFoundError } from "../schemas";

const userData = {
    id: {
        type: 'number'
    },
    balance: {
        type: 'number'
    }
}

export const BalanceWriteOffSchema = {
    summary: 'Write off balance',
    description: 'Write off user balance',
    tags: ['Balance route'],
    body: {
        description: 'Request body data',
        type: 'object',
        properties: {
            data: {
                type: 'object',
                properties: {
                    userID: {
                        type: 'number',
                        default: 1
                    },
                    amount: {
                        type: 'number',
                        minimum: 0.1,
                        default: 100
                    }
                },
                required: ['userID', 'amount']
            }
        },
        required: ['data']
    },
    response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            statusCode: { type: 'integer', default: 200 },
            data: {
                type: 'object',
                properties: {
                    balanceData: {
                        type: 'object',
                        properties: {
                            ...userData
                        }
                    }
                }
            }
          }
        },
    
        400: BadRequestError,
        404: UserNotFoundError,
        500: InternalServerError
    }
}