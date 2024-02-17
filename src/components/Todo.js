import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

 const Todo = ({task , toggleCompleted , deleteTodo , editTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={()=> toggleCompleted(task.id)} className={`pointer ${task.completed ? 'completed' : ''}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon className='pointer' icon={faPenToSquare} onClick={()=>editTodo(task.id)} />
                <FontAwesomeIcon className='pointer' icon={faTrash} onClick={()=>deleteTodo(task.id)} />
            </div>
        </div>
    );
}

export default Todo;
