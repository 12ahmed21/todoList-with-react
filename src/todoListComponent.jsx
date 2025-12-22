// import {}
import NavBar from './navBar.jsx';
import {Route,Routes,Link} from 'react-router-dom';
import AddValueInput from './AddValueInput.jsx';
import './styles/todoListComponent.css';
import { AddNowTodoContext } from './contexts/addNowTodoContext.jsx';
import { useContext, useEffect,useState } from 'react';
import {TodoContext} from './contexts/todoContext.jsx';
import AllTodos from './allTodos.jsx';
import ActiveTodos from './activeTodo.jsx';
import CompletedTodos from './completedTodo.jsx';
import EditTodoComponent from './editTodoComponent.jsx';
import { Edit } from '@mui/icons-material';
import DeleteWorning from './deleteWorning.jsx';
import Notes from './notes.jsx';
export default function TodoListComponent() {
    let [notesVisible, setNotesVisible] = useState([

    ]);
    let [DeleteWorningId, setDeleteWorningId] = useState(''

    );
    let [isDeleteWorning, setIsDeleteWorning] = useState(false);
    let [readyValue, setReadyValue] = useState("");
    let [indexEdit, setIndexEdit] = useState(0);
    let [isEdit, setIsEdit] = useState(false);
          let [todosList, setTodosList] = useState([

    ]);
    function toggleNotes(value) {
        setNotesVisible(value);
    }
    function handleSetDeleteWorningId(id){
        setDeleteWorningId(id);
    }
    function handleDeleteWorningChange() {
        setIsDeleteWorning(!isDeleteWorning);
    }
    function handleIndexEditChange(index) {
        setIndexEdit(index);
    }
    function handleReadyChange(value) {
       setReadyValue(value)
    }
    function setEdit(){
        setTodosList((p)=>
        p.map((todo)=>{
            if(todo.id === indexEdit){
                todo.text = readyValue
                return todo

            }else{
                return todo
            }
        }))
        localStorage.setItem("todos",JSON.stringify(todosList))
        toggleNotes( p => [...p,{title: "Edit todo success", id: crypto.randomUUID()}]);
    }
    function handleIsEditChange() {
        setIsEdit(!isEdit);
    }
    function addTodo(newTodoText) {
        let time = new Date().toLocaleString().slice(0,10);

        
        let newTodo = [...todosList,
            { text: newTodoText, completed: 0, id:crypto.randomUUID(), time: time },]
        setTodosList(newTodo);
        localStorage.setItem( "todos",JSON.stringify(newTodo));
                toggleNotes( p => [...p,{title: "Add todo success", id: crypto.randomUUID()}]);

    }
    useEffect(() => {
        let savedTodos = JSON.parse(localStorage.getItem("todos"));
        setTodosList(savedTodos && savedTodos.length ? savedTodos : []);
    }, []);
    function deleteTodo(id) {
        setTodosList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        let updatedTodos = todosList.filter((todo) => todo.id !== id);
        localStorage.setItem( "todos",JSON.stringify(updatedTodos));
                toggleNotes( p => [...p,{title: "Delete todo success", id: crypto.randomUUID()}]);
    }
    function completeTodo(id) {
        setTodosList((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id === id){ 
                    todo.completed = 1
                    return todo
                }else{
                    return todo
                }
            })
        )
                localStorage.setItem( "todos",JSON.stringify(todosList));
                toggleNotes( p => [...p,{title: "good job 👏", id: crypto.randomUUID()}]);
    }
    return (
        <TodoContext.Provider value={{todosList:todosList, setTodosList:setTodosList}}>
        <AddNowTodoContext.Provider value={{
            addTodo,
            deleteTodo,
            completeTodo,
            handleIsEditChange,
            handleReadyChange,
            setReadyValue,
            readyValue,
            isEdit,
            handleIndexEditChange,
            setEdit,
            handleDeleteWorningChange,
            isDeleteWorning,
            handleSetDeleteWorningId,
            DeleteWorningId,
            notesVisible
        }}>                    
            <div className="todo-list-component" >
                <h1>Todo List</h1>
                <div className="nav-bar">
                <Notes />
                </div>
                <NavBar />
                <div className="all-todos">
                <EditTodoComponent />
                
                <DeleteWorning />
                    <Routes>
                        <Route path='/' element={<AllTodos />} />
                        <Route path='/active' element={<ActiveTodos />} />
                        <Route path='/completed' element={<CompletedTodos />} />
                    </Routes>
                </div>

                <AddValueInput />

            </div>  
        </AddNowTodoContext.Provider>
        </TodoContext.Provider>
        )
}
