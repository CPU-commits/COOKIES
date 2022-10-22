import { env } from "$env/dynamic/private"
import Cryptr from "cryptr"

export async function load({ cookies }) {
    const cryptr = new Cryptr(env.SECRET_KEY)
    const decrypted = cryptr.decrypt(cookies.get('ID_SESSION'))
    const parsed = JSON.parse(decrypted)

    return {
        session: parsed,
    }
}
