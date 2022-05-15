//using Express Js to create server
const express = require('express');
//the router Ref
const rTasks = require("./routers/tasks.js");

const serverApp = express();
const port =3001;

serverApp.set("view engine", "ejs");
//parse json data
serverApp.use(express.json());
//parse form data
serverApp.use(express.urlencoded({extended:false}))
serverApp.use(rTasks);


serverApp.listen(port, () => console.log(`To-Do List server listening on port ${port}!`))