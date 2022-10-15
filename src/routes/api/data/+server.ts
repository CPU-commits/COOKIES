import { env } from "$env/dynamic/private"
import { error, json, type RequestEvent } from "@sveltejs/kit"
import cookie from 'cookie'
import Cryptr from 'cryptr'

function getUser(cookieData: string | undefined) {
    if (!cookieData) throw error(401, 'NJDSFJDSNF')

    const decrypt = new Cryptr(env.SECRET_KEY)
    const dectyptedData = decrypt.decrypt(cookieData)
    return JSON.parse(dectyptedData)
}

export function GET(event: RequestEvent) {
    const user = getUser(event.cookies.get('ID_SESSION'))

    console.log(user.token)
    return json({
        data: 1,
    })
}
