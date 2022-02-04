import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {
    const [note, setNote] = useState({title: "", content: ""});
    const [isExpanded, setIsExpanded] = useState(false);

    function expand(){
        setIsExpanded(true);
    }

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {...prevNote,
                    [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({title: "", content: ""});
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
      {isExpanded && <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />}
        <textarea onClick={expand} name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows={isExpanded?3:1} />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}
