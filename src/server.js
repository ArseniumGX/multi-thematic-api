const app = require('./app')

const port = +app.get('port') | 3001
const host = app.get('host')

app.listen(port, () => console.log(`Server is running at http://${host}:${port}/`))