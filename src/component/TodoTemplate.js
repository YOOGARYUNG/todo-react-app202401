import { MdAdd, MdDelete, MdDone } from "react-icons/md";
import React from "react";

const TodoTemplate = () => {
    return (
        <>
            <header>
                <h1>2024년 1월 10일</h1>
                <div class='day'>수요일</div>
                <div class='tasks-left'>할 일 3개 남음</div>
            </header>

            <ul class='todo-list'>
                <li className='todo-list-item'>
                    <div className='check-circle'>
                        <MdDone />
                    </div>
                    <span className='text'>할 일 어쩌구~~</span>
                    <div className='remove'>
                        <MdDelete />
                    </div>
                </li>
            </ul>

            <div className='form-wrapper'>
                <form className='insert-form'>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                    />
                </form>
            </div>
            <button className='insert-btn'>
                <MdAdd />
            </button>
        </>
    )
};

export default TodoTemplate;