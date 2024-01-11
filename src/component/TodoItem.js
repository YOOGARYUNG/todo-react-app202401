import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";
import cn from 'classnames';

import './scss/TodoItem.scss'

const TodoItem = ({item, onRemove}) => {

    const {id, title, done} = item;

    // console.log(props);

    const removeHandler = e => {
        onRemove(id);

    };

    return (
        <li className='todo-list-item'>
            <div className={cn('check-circle', {active : done})}>  {/* done이 true일때 active를 붙임 */}
                {item.done && <MdDone/>} {/* props.done이 true면 */}
            </div>
            <span className={cn('text', {finish : done})}>{item.title}</span>
            <div className='remove' onClick={removeHandler}>
                <MdDelete />
            </div>
        </li>

    );
};

export default TodoItem;