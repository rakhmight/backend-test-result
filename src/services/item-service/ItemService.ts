import { makeReq } from "../../utils/makeReq"
import { FastifyRedis } from '@fastify/redis'

export async function getItems(redis:FastifyRedis){
    const cachedItems = await redis.get('cachedItems')
    if(cachedItems) return { cachedItems: JSON.parse(cachedItems) }
    else{
        const tradableItems:Array<Item> = await makeReq('https://api.skinport.com/v1/items?tradable=0')
        const notTradableItems:Array<Item> = await makeReq('https://api.skinport.com/v1/items?tradable=1')
    
        notTradableItems.forEach((item:Item) => {
            const itemTarget = tradableItems.find((tradableItem:Item)=> tradableItem.market_hash_name == item.market_hash_name)
    
            if(!itemTarget) tradableItems.push(item)
        })
    
        const cachedItemsData = await redis.set('cachedItems', JSON.stringify(tradableItems), 'EX', 24*60*60) // 24 hours
        return { cachedItems: tradableItems, cachedItemsData }
    }
}