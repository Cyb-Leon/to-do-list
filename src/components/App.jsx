import React, { useEffect } from "react";
import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Login from "./login/Login";
import Note from "./Note";
import notes from "../notes";
import { Input, Ripple, initTWE } from "tw-elements";

// const usersDB = new pg.Client({
//   user: process.env.gresUsr,
//   host: process.env.gresHOST,
//   database: process.env.gresDB,
//   password:process.env.gresPSW,
//   port: process.env.gressPORT
// })
// usersDB.connect();




function createNotes(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

let isLoggedIn = false;

// const users =[
//   {
//     id: 1,
//     username: "Leon",
//     userpass: 12345
//   },
//   {
//     id:2,
//     username: "Zama",
//     userpass: 12344
//   }

// ]


 function renderConditionally() {

  //get users
  // const users = usersDB.query(
  //   "SELECT email, password FROM users WHERE email=($1) AND password=($2)", [props.username, props.psw], (err, results) => {
  //     if (err) {
  //       return err;
  //     } else {

  //     }
  //   }
  // )

  //ternary operator
  return (!isLoggedIn ? (<div> <Login/> <Footer/> </div>) :(<div> <Header /> {notes.map(createNotes)} <Footer /> </div>))
}

function App() {
  // const results = users.map((user) => user.username = ${givenUser})
useEffect(()=>{
  initTWE({ Input, Ripple });
},[])
 return <div>
    {renderConditionally()}
 </div>

}

export default App;
