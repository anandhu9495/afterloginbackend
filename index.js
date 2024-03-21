const express = require('express')

const cors = require('cors')

require('dotenv').config()

const db = require('./DB/Connection')

const router = require('./Router/UserRoter')

const appMiddleware = require('./MiddleWares/appMiddleWare')

const jwtMiddleware = require('./MiddleWares/JwtMiddleware')






const server = express()

server.use(cors())
server.use(express.json())
server.use(appMiddleware)
server.use(router)

const PORT = process.env.PORT || 4000


server.listen(PORT,() => {
    console.log("server listening on " + PORT);
})

server.get('/',(req,res)=>{
    res.send(`<h1>interview login started</h1>`)
})
