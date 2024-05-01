import fetch from 'node-fetch-cache';

export async function makeReq(url:string){
    const response = await fetch(
        url,
        undefined,
        {
          shouldCacheResponse: (response) => response.ok,
        },
    );    

    return response.json();
}