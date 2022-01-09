let mongoose = require("mongoose")

module.exports = () => {
    let PlayerSchema = mongoose.Schema({
        name: String,
        age: Number,
        position: String,
        stats: Array 
    })
    
    return mongoose.model("PlayerSchema", PlayerSchema)
} // qixmiers @ https://stackoverflow.com/questions/48643864/error-module-exports-mongoose