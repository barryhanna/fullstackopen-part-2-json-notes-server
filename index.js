import axios from 'axios';

const promise1 = axios.get('http://localhost:3001/notes');

promise1
	.then((res) => {
		console.log(res.data);
	})
	.catch((err) => console.error(err));

const promise2 = axios.get('http://localhost:3001/foobar');

// promise2.then((res) => console.log(res));
