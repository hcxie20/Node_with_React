module.exports = function() {
    const server_path = (process.env.NODE_ENV === "production")? "/app":""
    return server_path
}
