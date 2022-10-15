export default function isAuthenticated(cookieData: string | undefined) {
    if (cookieData === undefined) return false
    return true
}
