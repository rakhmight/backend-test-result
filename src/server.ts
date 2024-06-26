import { build } from "./app";
import { fastifyConfig } from "./configs";
import getHostAddress from "./utils/getHostAddress";

export const app = build(fastifyConfig);

(async () => {
    try {             
        await app.ready((err:Error | null) => {
            if (err) throw err
        })
        
        if(!process.env.SERVER_PORT) throw new Error('SERVER_PORT enverventment variable is not defined')
        const serverHost = getHostAddress()
        //необязательно
        if(!serverHost) throw new Error('Cannot determine host address')
            
        await app.listen({port: +process.env.SERVER_PORT, host: serverHost })
        .then(() => {            
            app.log.info({ actor: 'Test-server' }, 'Server started successfully')
        })
    } catch (err) {
        app.log.fatal({ actor: 'Test-server' }, (err as Error).message)
        process.exit(1)
    }
})()

function hostError(){
    app.log.fatal({ actor: 'Test-server' }, 'Unable to get ip address of host')
    process.exit(1)
}