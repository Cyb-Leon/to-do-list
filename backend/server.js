//using Express Js to create server
const express = require('express');
const serverApp = express();
const port =3001;

//middleware to access the static public files
serverApp.use(express.static('./public'))

serverApp.get('/api/v1/', (req, res) => res.send('Hello World!'))




serverApp.listen(port, () => console.log(`To-Do List server listening on port ${port}!`))