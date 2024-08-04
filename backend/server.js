//using Express Js to create server
import express from "express";
import morgan from "morgan";

//instance of our server called ServerApp
const serverApp = express();
const port = 3001;

//middleware logging Morgan
serverApp.use(morgan("tiny"));

serverApp.get("/",(req,res)=>{
    res.send("Sho dawg");
})

serverApp.listen(port, () => console.log(`server listening on port ${port}!`))