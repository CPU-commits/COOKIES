import { error, redirect } from "@sveltejs/kit"

export const load = async ({ parent }) => {
    const session = await parent()
    if (session == undefined) {
        return redirect(303, '/login')
    }
    if (session.user_type === 'a') throw error(401, 'Invalid user')
    return {
        hello: 'string'
    }
}
