import { useContext } from "react";
import { TodoContext } from "./contexts/todoContext.jsx";
import ButtonsComponent from './buttonsComponent.jsx';

export default function ActiveTodos() {
    let todoContext = useContext(TodoContext);
        let todoListShow = todoContext.todosList.map((todo) => {
            if(todo.completed === 0){
            return(
    
            <div className="todo-item" key={todo.id} style={todo.completed? {borderColor:"green"}:{}}>
                <div>{todo.text}</div>
            <ButtonsComponent combleted={todo.completed} id={todo.id} text={todo.text} date={todo.time} />
            </div>             
            )}else{
                return(
                 []            
                )

            }
        }
    );
    let filteredTodos = todoListShow.filter(item => item !== undefined && item.length !== 0);
    todoListShow = filteredTodos;
    return (
        <>{todoListShow.length > 0 ? todoListShow : <div className="no-todos">No todos in progress</div>}</>
    );
}