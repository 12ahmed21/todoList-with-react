export function todoReducer(lastvalue = [],action){
    switch(action.type){

        
        case "add" : {

            let time = new Date().toLocaleString().slice(0,10);
             let newTodo = [...lastvalue,
            { text: action.path.text,
              completed: 0, id:crypto.randomUUID(),
              time: time, TheTimeYouNeddedToFinish:0 
            },]
            localStorage.setItem( "todos",JSON.stringify(newTodo));
            return newTodo
        }
        case "remove":{
            let value = lastvalue.filter((todo) => todo.id !== action.path.text)
            localStorage.setItem( "todos",JSON.stringify(value)); 
            return value
        }
        case "completed":{
            let value = lastvalue.map((todo)=>{
                if(todo.id === action.path.id){ 
                    const needfrom = new Date(todo.time);
                    const needto = new Date();
                    const needtimeFinished = Math.floor((needto - needfrom) / (1000 * 60 * 60 * 24));
                    return { ...todo, completed: 1, TheTimeYouNeddedToFinish: needtimeFinished}
                }else{
                    return todo
                }
            })
            localStorage.setItem( "todos",JSON.stringify(value));
            return value
        }
        case "edit":{
            let afterEdit = lastvalue.map((todo)=>{
            if(todo.id === action.path.id){
                todo.text = action.path.nowValue
                return todo
            }else{
                return todo
            }
        })
        localStorage.setItem( "todos",JSON.stringify(afterEdit));
        return afterEdit
        }
        case "get":{
            return JSON.parse(localStorage.getItem("todos")) ?? [];
        }
    }
}