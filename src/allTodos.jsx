import { useContext } from "react";
import { TodoContext } from "./contexts/todoContext.jsx";
import ButtonsComponent from './buttonsComponent.jsx';

export default function AllTodos() {
    let todoContext = useContext(TodoContext);
    
        let todoListShow = todoContext.todosList.map((todo) => {
                        const from = new Date(todo.time);
            const to = new Date();
            const timeFinished = Math.floor((to - from) / (1000 * 60 * 60 * 24));
            return(
        <div className="todo-item" key={todo.id} style={todo.completed? {borderColor:"green"}:{}}>
            <div>{todo.text}</div>
 <ButtonsComponent combleted={todo.completed} id={todo.id} text={todo.text} date={todo.time} timeFinished={timeFinished} />
        </div>
        )
});
    return (
        <>{todoListShow ==""? <div className="no-todos">No todos yet</div>: todoListShow}</>
    );
}