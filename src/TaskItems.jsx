function TaskItems({ task, index, isLast, deleteTask, moveTaskUp, moveTaskDown }){
    return( <li>
            <span className='text'>{task}</span>
            <button className='delete-button'
            onClick={()=> deleteTask(index)}>Delete🗑️
            </button>

             <button className='move-up-button'
            onClick={()=> moveTaskUp(index)}disabled={index === 0}>move up ⬆
            </button>

    

             <button className='move-down-button'
            onClick={()=> moveTaskDown(index)}disabled={isLast}>move down ⬇
            </button>

            
            
            
        </li>


    );

}

export default TaskItems;