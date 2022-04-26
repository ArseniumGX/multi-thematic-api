const app = require("./app");

const port = app.get("port") || 3001;

app.listen(port, () =>
	port === 3001
		? console.log(`Server is running at http://localhost:${port}/`)
		: true
);
