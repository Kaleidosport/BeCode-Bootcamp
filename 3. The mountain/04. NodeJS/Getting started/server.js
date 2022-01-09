const HTTP = require("http")
const FS = require("fs")
const URL = require("url")

const SERVER = HTTP.createServer((req, res) => {
    res.statusCode = 200
    FS.readFile("./Getting started/views/index.html", "utf-8", (error, data) => {
        if (error) throw error
        let query = URL.parse(req.url, true).query
        res.setHeader("Content-Type", "text/html; charset=utf-8")
        data = data.replace("{{name}}", query.name)
        res.end(data)
    })
})

const PORT = 3000
SERVER.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})

