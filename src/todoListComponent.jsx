
import NavBar from './navBar.jsx';
import {Route,Routes} from 'react-router-dom';
import AddValueInput from './AddValueInput.jsx';
import './styles/todoListComponent.css';
import {useState, useEffect,useMemo,useReducer} from "react"
import { AddNowTodoContext } from './contexts/addNowTodoContext.jsx';
import {TodoContext} from './contexts/todoContext.jsx';
import AllTodos from './allTodos.jsx';
import EditTodoComponent from './editTodoComponent.jsx';
import DeleteWorning from './deleteWorning.jsx';
import Notes from './notes.jsx';
import { todoReducer } from './reducers/todoReducer.jsx';
export default function TodoListComponent() {
    let [notesVisible, setNotesVisible] = useState([

    ]);
    let [DeleteWorningId, setDeleteWorningId] = useState(''

    );
    let [isDeleteWorning, setIsDeleteWorning] = useState(false);
    let [readyValue, setReadyValue] = useState("");
    let [indexEdit, setIndexEdit] = useState(0);
    let [isEdit, setIsEdit] = useState(false);
    let [todoList2,dispatch] = useReducer(todoReducer,[])
    const completedTodo = useMemo(()=>{
        return todoList2.filter((t)=>{
            return t.completed
        })
    }, [todoList2])
    const notcompletedTodo = useMemo(()=>{
        return todoList2.filter((t)=>{
 
            return !t.completed

        })
    }, [todoList2])
    
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
        dispatch({type:"edit",path:{
            nowValue:readyValue,
            id:indexEdit
        }})

        toggleNotes( p => [...p,{title: "Edit todo success", id: crypto.randomUUID()}]);
    }

    function handleIsEditChange() {
        setIsEdit(!isEdit);
    }

    function addTodo(newTodoText) {
        dispatch({type:"add",path:{
            text:newTodoText
        }})
        toggleNotes( p => [...p,{title: "Add todo success", id: crypto.randomUUID()}]);

    }

    useEffect(() => {
        dispatch({type:"get"})
    }, []);


    function deleteTodo(id) {
        dispatch({type:"remove",path:{
            text:id
        }})
        toggleNotes( p => [...p,{title: "Delete todo success", id: crypto.randomUUID()}]);
    }

    function completeTodo(id) {
        dispatch({type:"completed",path:{
            id:id
        }})
                toggleNotes( p => [...p,{title: "good job 👏", id: crypto.randomUUID()}]);
    }
    return (
        <TodoContext.Provider value={{ completedTodo , notcompletedTodo}}>
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
                        <Route path='/' element={<AllTodos title ={ "no todos yet"}  value ={todoList2}/>} />
                        <Route path='/active' element={<AllTodos title ={ "There are no tasks in progress"}  value = {notcompletedTodo} />} />
                        <Route path='/completed' element={<AllTodos title ={ "no tasks has been completed"}  value ={completedTodo} />} />
                    </Routes>
                </div>
                <AddValueInput />

            </div>  
        </AddNowTodoContext.Provider>
        </TodoContext.Provider>
        )
}
