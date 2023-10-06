
const jsonServer = require('json-server')
const {generate} = require('./mockServer-quasargram')
const server = jsonServer.create()
const jsonDB = generate()
const router = jsonServer.router(jsonDB);
const middlewares = jsonServer.defaults();

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})