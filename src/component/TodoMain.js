import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = () => {

    const todoList = [
        {
            id: 1,
            title: '장보기',
            done: false
        },
        {
            id: 2,
            title: '저녁먹기',
            done: true
        },
        {
            id: 3,
            title: '수다떨기',
            done: false
        },
        {
            id: 4,
            title: '축구하기',
            done: true
        }

    ];

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