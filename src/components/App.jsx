import React from "react";
import "./styletail.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Login from "./login/Login";
import Note from "./Note";
import notes from "../notes";
import { Input, Ripple, initTWE } from "tw-elements";

initTWE({ Input, Ripple });


function createNotes(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  );
}

let loggedIn = false;

const users =[
  {
    id: 1,
    username: "Leon",
    userpass: 12345
  },
  {
    id:2,
    username: "Zama",
    userpass: 12344
  }

]


function renderConditionally(props) {
  if (!loggedIn) { 
    return (
      <div>
        <Login/>
        <Footer/>
        </div>);
  } else {
    return     ( 
     <div> <Header />
      {notes.map(createNotes)}
      <Footer /> 
      </div>);
  }
}

function App() {
  // const results = users.map((user) => user.username = ${givenUser})
 return <div>
    {renderConditionally()}
 </div>

}

export default App;
