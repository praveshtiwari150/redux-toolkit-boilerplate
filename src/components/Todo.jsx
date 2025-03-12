import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeTodo } from '../store/features/todo/todoSlice';
const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <div className='p-4 border mt-4'>
      <div className='text-2xl font-bold text-violet-500'>
        Todos
      </div>
      {
        todos.map((item, index) => (
          <div key={index} className='mt-6 flex justify-start items-center gap-4'>
            <div className='text-xl font-bold text-amber-200'>{index + 1 + "."} {item.text}</div>
            <button
              onClick={() => dispatch(removeTodo(item.id))}
            >Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default Todo
