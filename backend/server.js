//using Express Js to create server
import express from "express";
import bodyParser from "body-parser";
import { dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

//instance of our server called ServerApp
const serverApp = express();
const port = 3001;


//created express middleware logger
const LeoLogger = (req,res, next) => {
    console.log("Request method: " + req.method);
    next();
}


//middleware logging LeoLogger
serverApp.use(LeoLogger);
serverApp.use(express.urlencoded({extended: true}));


serverApp.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`);
})


serverApp.post("/tapin",(req,res)=>{
    //mix masala the data and shit it out!

console.log(req.body);
})

serverApp.listen(port, () => console.log(`server listening on port ${port}!`))