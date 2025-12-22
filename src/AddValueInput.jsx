import {useState} from 'react';
import Button from '@mui/material/Button';
import { AddNowTodoContext } from './contexts/addNowTodoContext.jsx';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
export default function AddValueInput() {
    let [inputValue, setInputValue] = useState("");
    const addTodo = useContext(AddNowTodoContext).addTodo;
    return (
        <div className="add-value-input">
            <div className="input-container">
                <TextField
                    variant="standard"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label="Add new todo"
                      size="small"
                />
            </div>
            <Button onClick={() =>{ inputValue && addTodo(inputValue);setInputValue("")}}variant="outlined">Add</Button>
        </div>
    )
}