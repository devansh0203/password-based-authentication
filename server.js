require('dotenv').config();  
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.json())

const user = [
	{
		username : "Devansh",
		password : "12345"
	},
	{
		username : "Divyansh",
		password : "54321"
	}
]

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const userFound = user.find(user => user.username === username && user.password === password);
	if(userFound){
		res.json({message : "Login Successfull", user : userFound})
	}
	else{
		res.json({message : "Invalid Credentials"})
	}
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
})
