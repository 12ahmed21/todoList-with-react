
import { useContext } from "react";
import { AddNowTodoContext } from "./contexts/addNowTodoContext";
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
export default function Notes() {
    let {notesVisible} = useContext(AddNowTodoContext);
    let mabw = notesVisible.map((note) =>{
        return(
            <div key={note.id} className="notes-container">
                <Alert variant="filled">
                    {note.title}
                </Alert>
            </div>
        )
    });
    return (    
        <div  className="note-items">
            {mabw}
        </div>
    );
}