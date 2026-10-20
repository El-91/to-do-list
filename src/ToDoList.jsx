import { useState,useEffect  } from 'react'
import TaskItem from './TaskItems'

function ToDoList() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

      if(newTask.trim() !==""){
      setTasks (t =>([...t,newTask]));
      setNewTask("");}

    }

    function deleteTask(index){
      const updatedTasks = tasks.filter((_,i) => i !== index);
      setTasks(updatedTasks);


    }

    function moveTaskUp(index){
      if(index >0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]]= [updatedTasks[index-1],updatedTasks[index]]
        setTasks(updatedTasks);
      
      }


    }

      function moveTaskDown(index){
        if(index < tasks.length -1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]]= [updatedTasks[index+1],updatedTasks[index]]
        setTasks(updatedTasks);
      
      }}
         function handleKeyDown(event) {
        if (event.key === "Enter") {
        addTask();}
      }


    return( <div className="to-do-list">

      <h1>To-Do List🗒️</h1>
  <div>
    <input type="text"
           placeholder="Enter a task..."
           value={newTask}
           onChange={handleInputChange}
           onKeyDown={handleKeyDown} />
           <button className='add-button'
                   onClick={addTask}
                    >Add
                    </button>
    </div>

    <ol>
  {tasks.map((task, index) => (
    <TaskItem
      key={index}
      task={task}
      index={index}
      isLast={index === tasks.length - 1}
      deleteTask={deleteTask}
      moveTaskUp={moveTaskUp}
      moveTaskDown={moveTaskDown}
    />
  ))}
</ol>


  </div>);

}
export default ToDoList;