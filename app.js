const http = require('http')
const server = http.createServer((request, Response) => {
    if(request.url=='/'&& request.method=='GET')
    Response.end(JSON.stringify({"message":"Accediendo a la cupula"}))
})

const port = 5000
const host = "localhost"

server.listen(port, host, () => {
    console.log(`Servidor ejecutandose en: http://${port}:${host}`)
})
