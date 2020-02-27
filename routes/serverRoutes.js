module.exports = function() {
    const server_path = (process.env.NODE_ENV === "Production")? "/app":""
    return server_path
}
