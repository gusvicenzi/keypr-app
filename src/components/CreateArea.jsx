import React, { useState } from "react";

export default function CreateArea() {
    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event){
        console.log(event.target);
        const {name, value} = event.target;
    }

  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}
