//using Express Js to create server
const express = require('express');
const serverApp = express();
const port =3001;
//the router Ref
const rTasks = require("./routers/tasks.js");

//middleware to access the static public files
serverApp.use(express.static("./public"));
serverApp.use(rTasks);


serverApp.listen(port, () => console.log(`To-Do List server listening on port ${port}!`))