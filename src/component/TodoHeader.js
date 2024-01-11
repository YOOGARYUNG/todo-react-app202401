import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({count}) => {

    const today = new Date();

    const dateString = today.toLocaleDateString('ko-KR', { // 한국식 날짜
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' }); // 한국식 요일


    return (
        <header>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>할 일 {count}개 남음</div>
        </header>
    );
};

export default TodoHeader;