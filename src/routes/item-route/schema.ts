import { BadRequestError, InternalServerError } from "../schemas";

const itemData = {
    market_hash_name: {
        type: 'string'
    },
    currency: {
        type: 'string',
        enum: ['AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HRK', 'NOK', 'PLN', 'RUB', 'SEK', 'TRY', 'USD']
    },
    suggested_price: {
        type: 'number',
        minimum: 0.1
    },
    item_page: {
        type: 'string',
        format: 'uri'
    },
    market_page: {
        type: 'string',
        format: 'uri'
    },
    min_price: {
        type: 'number',
        minimum: 0.1
    },
    max_price: {
        type: 'number',
        minimum: 0.1
    },
    mean_price: {
        type: 'number',
        minimum: 0.1
    },
    median_price: {
        type: 'number',
        minimum: 0.1
    },
    quantity: {
        type: 'number'
    },
    created_at: {
        type: 'number'
    },
    updated_at: {
        type: 'number'
    }
}

export const GetItemsSchema = {
    summary: 'Get items',
    description: 'Get all items',
    tags: ['Item route'],
    response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            statusCode: { type: 'integer', default: 200 },
            data: {
                type: 'object',
                properties: {
                    items: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                ...itemData
                            }
                        }
                    }
                }
            }
          }
        },
    
        500: InternalServerError
    }
}