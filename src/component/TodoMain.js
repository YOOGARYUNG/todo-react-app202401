import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({todoList}) => {



    return (
        <ul className='todo-list'>
            {
                todoList.map(todo => <TodoItem key={todo.id} item={todo} />)
                // map을 사용해서 할때는 key를 꼭넣어야함 수백개씩넣을때 성능이슈를 일으킴
            }
        </ul>
    );
};

export default TodoMain;