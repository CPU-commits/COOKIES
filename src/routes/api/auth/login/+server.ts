import { error, json } from '@sveltejs/kit'
import bd from '$lib/server/bd'
import cookie from 'cookie'
import Cryptr from 'cryptr'
import { env } from '$env/dynamic/private'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: any) {
    const data = await request.json()
    // Base de datos
    // Match... ¿Está en la base de datos y con la contraseña correcta?
    const match = true
    if (match) {
    } else {
        throw error(401, 'Tú contraseña no está corecta')
    }

    const userData = JSON.stringify({
        id: 1,
        token: 'dkfsdkfjIJFSDF',
    })
    const encrypt = new Cryptr(env.SECRET_KEY)

    const dataEncrypt = encrypt.encrypt(userData)
    const cookieSession = cookie.serialize('ID_SESSION', dataEncrypt, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
    })
    // Return data
    return json(
        {
            message: 'Se ha creado exitosamente',
        },
        {
            status: 200,
            headers: {
                'Set-Cookie': cookieSession,
            },
        },
    )
}
