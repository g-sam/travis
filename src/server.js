const http = require('http')
const handler = require('../src/handler.js')
const server = http.createServer(handler)

const port = 4000

server.listen(port)

console.log(`server is running on http://localhost: ${port}`)


