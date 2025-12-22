import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import { AddNowTodoContext } from './contexts/addNowTodoContext.jsx';
import { useContext } from 'react';
export default function EditTodoComponent(){    
    let {isEdit, handleIsEditChange, readyValue,handleReadyChange,setEdit} = useContext(AddNowTodoContext);


    if(!isEdit){
        return null;
    }
    return(
        <><div className="blurer"></div>
        <div className="edit-todo-component">
            <div className="edit-input-container">  
                <TextField
                    variant="standard"
                    type="text"
                    value={readyValue}
                    onChange={({target}) => handleReadyChange(target.value)}
                    label="Edit todo"
                      size="small"
                />
            </div>
            <div className="buttons-edit-todo">
                <Button variant="outlined" onClick={() => { readyValue && setEdit() & handleIsEditChange() & handleReadyChange("")}}>Save</Button>
                <Button variant="contained" color='error' onClick={() => {handleIsEditChange() ; handleReadyChange("")}}>Cancel</Button>
            </div>
        </div>
        </>
    )
}