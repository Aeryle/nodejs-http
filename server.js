const { parse } = require('url');
const http = require('http');
const port = 8000;

const requestHandler = (req, res) => {
	if (!req.url.includes('favicon.icon')) {
		const { query } = parse(req.url, true);
		if (query.name && query.city) {
			res.end(`Hello, ${query.name} from ${query.city}!`);
		} else {
			res.end('Please provide name and city parameters');
		}
	}
};

const server = http.createServer(requestHandler);
server.listen(port, err => {
	if (err) {
		console.error('Something bad happened');
	} else {
		console.log(`Server is listening on port ${port}`);
	}
});
