import {useState} from 'react';
import Task from './Task.js';
const TodoList=()=>{
    const [todoList,setTodoList]=useState([]);
    const [newTask,setNewTask]=useState(" ");
    const handleChange=(event)=>{
          setNewTask(event.target.value);
    };
    const addTask=()=>{
         const task={
            id: todoList.length===0?1:todoList[todoList.length-1].id+1,
            taskName: newTask,
            completed:false,
            show:true,
    };
         setTodoList([...todoList,task]);
    };
    const deleteTask=(id)=>{
        const newTodoList=todoList.filter((task)=>{
       if(task.id===id)
          return false;
       else
          return true;
        })
        setTodoList(newTodoList);
    }
    const completeTask=(id)=>{
        setTodoList(
            todoList.map((task)=>{
                if(task.id===id)
                   return {...task,completed:true};
                else 
                   return task;

            })
        )
    }
    return(
        <div className="todoapp">
            <div className="task">
              <h1>Todo App</h1>
            <input type="text" placeholder="Add New Task" onChange={handleChange}/>
            <button onClick={addTask}>ADD TASK</button>
            <hr className="line"/>
            </div>
            <u><h4 className="tasks">Todo-List</h4></u>
            <div className="lists">
                {todoList.map((task)=>{
                   return (<Task taskName={task.taskName}  id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} show={task.show}/>
                   );
                })}
            </div>
        </div>
    );
}
export default TodoList;