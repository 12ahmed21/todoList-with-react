
import { useContext } from "react";
import { AddNowTodoContext } from "./contexts/addNowTodoContext";
export default function Notes() {
    let {notesVisible} = useContext(AddNowTodoContext);
    let mabw = notesVisible.map((note) =>{
        return(
            <div key={note.id} className="notes-container">
                <h4>Notes</h4>
                <h2>{note.title}</h2>
            </div>
        )
        cons
    });
    return (    
        <div  className="note-items">
            {mabw}
        </div>
    );
}