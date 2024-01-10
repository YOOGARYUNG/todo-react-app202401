import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";
import cn from 'classnames';

import './scss/TodoInput.scss'

const TodoInput = () => {

    // sueState는 렌더링 상태를 관리하는 변수지정 리액트 훅
    const [open, setOpen] = useState(false);

    // 버튼 클릭 이벤트
    const onToggle = e => {
        setOpen(!open);  // 기존 open의 반댓값

    }

    return (
        <>
            {open && (<div className='form-wrapper'> {/* 둘다 true이면 open 기본값이 false */}
                <form className='insert-form'>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                    />
                </form>
            </div>)}

            {/*
                cn() : 첫번째 파라미터는 항상 유지할 클래스
                    두번째 파라미터는 논리 상태값
                    => 논리상태값이 true일경우 해당클래스가 추가
                       false일 경우 제거
            */}
            <button className={cn('insert-btn', {open})} onClick={onToggle}>
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;