const JSONFILE = require("jsonfile")
const PATH = "./Database/users.json"

module.exports = (app) => {
    // Get all users
    app.get("/users", (req, res) => {

        console.log(`Fetching all users.`)
    
        JSONFILE.readFile(PATH, function(error, content) {
            res.send(content)
        })
    })

    // Get a specific user
    app.get("/user", (req, res) => {

        let user
        let email = req.query.email // /!\ Query field, not body field /!\

        JSONFILE.readFile(PATH, (error, content) => {
            for (let i = content.length - 1; i >= 0; i--) {
                if (content[i].email === email) {
                    console.log(`Found user ${content[i]}.`)
                    console.log(content[i])
                    user = content[i]
                }
            }

            res.send(user)
        })
    })

    // Add a new user
    app.post("/users/new", (req, res) => {
        
        let {email, username} = req.body
    
        JSONFILE.readFile(PATH, function(error, content) {
            content.push({email, username})
            
            console.log(`Added ${email} to the database.`)

            JSONFILE.writeFile(PATH, content, function(error) {
                console.log(error)
            })
            res.sendStatus(200)
            // Displays OK or 200 status code in the response.
        })
    })

    // Update username
    app.put("/user", (req, res) => {
        
        let user
        let username = req.body.username // /!\ Body field in Thunder Client /!\
        let email = req.query.email // /!\ Query field in Thunder Client /!\

        JSONFILE.readFile(PATH, function(error, content) {
            for (let i = content.length - 1; i >= 0; i--) {
                if (content[i].email === req.query.email) {
                    console.log(`Updated user ${req.query.email} has now ${username} as username.`)

                    user = content[i]
                    user.username = username
                }
            }

            JSONFILE.writeFile(PATH, content, function(error) {
                console.log(error)
            })
        })

        res.send(user)
    })

    // Delete a given user
    app.delete("/users/destroy", (req, res) => {

        let email = req.body.email

        JSONFILE.readFile(PATH, function(error, content) {
            for (let i = content.length - 1; i >= 0; i--) {
                if (content[i].email === email) {
                    console.log(`Removing ${content[i].email} from the database.`)
                    content.splice(i, 1) // Much better than pop()
                }
            }

            JSONFILE.writeFile(PATH, content, function(error) {
                console.log(error)
            })
            res.sendStatus(200)
        })
    })
}