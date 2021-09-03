const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://localhost:3007/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
}).then(res => console.log(res.connections)).catch(err => console.log(err))

module.exports = mongoose