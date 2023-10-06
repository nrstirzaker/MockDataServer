
const jsonServer = require('json-server')
const {generate} = require('./mockServer-quasargram')
const server = jsonServer.create()
const jsonDB = generate()
const router = jsonServer.router(jsonDB);
const middlewares = jsonServer.defaults();

server.use(middlewares)
server.use(router)
const PORT = 3000;
server.listen(PORT, () => {
    console.log("[" + new Date() + '] MockDataServer is running on port: ' + PORT )
})