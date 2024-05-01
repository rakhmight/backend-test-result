import { Pool } from "pg";
import APIError from '../../exceptions/api-v1'

export async function writeOffBalance(userID: number, amount: number, pg: Pool) {

    const client = await pg.connect()
    const user = await client.query("SELECT * FROM users WHERE id=$1", [userID])

    if(!user.rows.length) throw new Error('user-not-found')

    const userData = user.rows[0]
    if(userData.balance < amount) throw new Error('bad-req')

    const balanceData = await client.query(`UPDATE users SET balance=${userData.balance-amount} WHERE id=$1 RETURNING *`, [userID])
            
    client.release()
    return balanceData.rows[0]
}