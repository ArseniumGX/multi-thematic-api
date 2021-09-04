const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(`mongodb+srv://blue-api.t3zbq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    authSource: 'admin',
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
    
}).then(res => console.log('Database is connected!')).catch(err => console.log(err))

module.exports = mongoose