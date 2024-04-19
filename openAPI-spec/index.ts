import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { openApiSpec } from './openapispec';

const app = express();
const port = 3000;

app.use(express.json());

let users = [
	{ id: 1, name: 'John Doe' },	
	{ id: 2, name: 'Jane Doe' }
];

app.get('/users', (req, res) => {
	const { name }: {name?: string} = req.query;
	if (name) {
		const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
		res.json(filteredUsers);
	} else {
		res.json(users);
	}
});

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(openApiSpec))
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
