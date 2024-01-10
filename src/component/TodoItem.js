import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";
import './scss/TodoItem.scss'

const TodoItem = ({item}) => {

    const {id, title, done} = item;

    // console.log(props);

    return (
        <li className='todo-list-item'>
            <div className='check-circle'>
                {item.done && <MdDone/>} {/* props.done이 true면 */}
            </div>
            <span className='text'>{item.title}</span>
            <div className='remove'>
                <MdDelete />
            </div>
        </li>

    );
};

export default TodoItem;