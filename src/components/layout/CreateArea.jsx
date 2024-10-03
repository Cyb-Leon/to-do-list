import React, { useState } from "react";

function CreateArea(props) {

    const [note,setNote] = useState({
        title: "",
        content: ""
    }) //objects

    function handleChange(event) {
        const {name,value} = event.target; //event listeners/handlers
    
        setNote(prevNote =>{
            return {
                ...prevNote, //Spread Operator
                [name]:value
            };
        });
    }

    //submit note
    function submitNote(event) {
        props.onAdd(note); //access funtion from other compopen(App.jsx)
        setNote({
            title: "",
            content:""
        })

        //prevent window reload when content changes.
        event.preventDefault();
    }

    return (
        <div>
        <form>
          <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
          <textarea name="content" onChange={handleChange}  value={note.content} placeholder="Take a note..." rows="3" />
          <button onClick={submitNote}>Add</button>
        </form>
      </div>
    )
}

export default CreateArea;