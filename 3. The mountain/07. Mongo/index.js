const MONGOOSE = require("mongoose")
const EXPRESS = require("express")
const SOCKET = require("socket.io")
const BODYPARSER = require("body-parser")

require("dotenv").config()

const MONGO_USER = process.env.MONGO_USER
const MONGO_PW = process.env.MONGO_PW
const MONGO_DB = process.env.MONGO_DB

const APP = EXPRESS()
APP.use(BODYPARSER.json())

require("./Models/players")(APP)
// require("./Routes/playersRoutes")(APP)

MONGOOSE.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PW}@${MONGO_DB}.5c5eb.mongodb.net/myFirstData?retryWrites=true&w=majority`)

const PORT = 5000

APP.listen(PORT, () => {
    console.log(`Server running.`)
})