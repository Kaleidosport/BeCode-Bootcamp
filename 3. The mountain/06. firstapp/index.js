const express = require("express")
const BODYPARSER = require("body-parser")

const app = express()

app.use(BODYPARSER.json())

require("./routes/userRoutes")(app)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running.`)
})