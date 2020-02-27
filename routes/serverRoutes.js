export function serverPath() {
    const server_path = (process.env.NODE_ENV === "production")? "/app":""
    return server_path
}