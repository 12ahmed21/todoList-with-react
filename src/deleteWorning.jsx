import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import { AddNowTodoContext } from './contexts/addNowTodoContext.jsx';
import { useContext } from 'react';
export default function DeleteWorning(){    
    let {handleDeleteWorningChange,isDeleteWorning,DeleteWorningId,deleteTodo} = useContext(AddNowTodoContext);


    if(!isDeleteWorning){
        return null;
    }
    return(
        <><div className="blurer"></div>
        <div className="edit-todo-component">
            <div className="edit-input-container">  
                <h3>Are you sure you want to delete this todo?</h3>
            </div>
            <div className="buttons-edit-todo">
                <Button variant="outlined" onClick={() => { deleteTodo(DeleteWorningId); handleDeleteWorningChange() }}>delete</Button>
                <Button variant="contained" color='error' onClick={() => {handleDeleteWorningChange()}}>Cancel</Button>
            </div>
        </div>
        </>
    )
}