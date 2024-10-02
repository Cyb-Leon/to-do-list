import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Login from "./login/Login";
import Note from "./Note";
import CreateArea from "./layout/CreateArea";
import { Input, Ripple, initTWE } from "tw-elements";
import Signup from "./register/Signup";

function App() {
  // const results = users.map((user) => user.username = ${givenUser})

  //to be able to use effects on component
  useEffect(() => {
    initTWE({ Input, Ripple });
  }, []);

  //array of notes to be update
  const [notes,setNote] = useState([]);
  
  function addNote(newNote) {
    setNote(prevNotes =>{
    return  [ ...prevNotes,newNote];
    });
  }

  //delete a note
  function deleteNote(id) {
    //set the value from using the useState
    setNote(prevNotes => {
      return prevNotes.filter((noteItem,index) =>{
        return index !== id
      })
    })
    console.log("i was trigged to delete from Note.jsx");
  }

  return (
    <div>
      {" "}
      <Header /> <CreateArea onAdd={addNote} />{" "}
      {notes.map((noteItem,index) =>{
        return  <Note key={index} id={index} title= {noteItem.title} content= {noteItem.content} onDelete={deleteNote}/>
      })}
      <Footer />{" "}
    </div>
  );

  //  if (isLoggedIn === undefined) {
  //    return <div>
  //     <Signup/>
  //    </div>
  //  }else{
  //   return <div>
  //   {renderConditionally()}
  // </div>
  //  }

  // function createNotes(noteItem) {
  //   return (
  //     <Note
  //       key={noteItem.key}
  //       title={noteItem.title}
  //       content={noteItem.content}
  //     />
  //   );
  // }

  let isLoggedIn = true;

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

  //  function renderConditionally() {

  //   //get users
  //   // const users = usersDB.query(
  //   //   "SELECT email, password FROM users WHERE email=($1) AND password=($2)", [props.username, props.psw], (err, results) => {
  //   //     if (err) {
  //   //       return err;
  //   //     } else {

  //   //     }
  //   //   }
  //   // )

  //   //ternary operator
  //   return (!isLoggedIn ? (<div> <Login/> <Footer/> </div>) :(<div> <Header /> <CreateArea/> <Note key={1} title="Note title"/><Footer /> </div>))
  // }
}

export default App;
