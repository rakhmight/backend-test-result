import { makeReq } from "../../utils/makeReq";

export async function getItems(){
    const items = await makeReq('https://api.skinport.com/v1/items')
    return items
}