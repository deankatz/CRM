const mongoose = require('mongoose')
const Schema = mongoose.Schema

let clientsSchema = new Schema({
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})


const Clients = mongoose.model("Clients", clientsSchema)
module.exports = Clients