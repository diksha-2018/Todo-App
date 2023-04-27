
const Task = (props) => {
  
    return(
    <div className="list1"  style={{ backgroundColor:props.completed ? "lightgreen":"lightcoral"}}>
       <div className="task1">{props.taskName}</div>
       <button className="button1" onClick={()=>props.completeTask(props.id)}>Completed</button>
       <button  className="button2" onClick={()=>props.deleteTask(props.id)}>Delete</button>
       </div>);
};

export default Task;
