const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
}).then(res => console.log(res.connections)).catch(err => console.log(err))

module.exports = mongoose