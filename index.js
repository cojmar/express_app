const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { json } = require('express/lib/response');

const handle_request = new class {
	get_data(data) {
		return { "input_data": data }
	}
	set_data(data) {
		return ["done"]
	}
}


app.use('/', express.static('app'))
app.use(bodyParser.json());

app.post('/', (req, res) => {
	let data = req.body
	if (!data.action || typeof handle_request[data.action] !== 'function') res.send(["error"])
	else res.send(JSON.stringify(handle_request[data.action](data)))
});
app.listen(port, () => console.log(`http://localhost:${port}`));