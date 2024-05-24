import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo,updateTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  
   const [text,setText]=useState('')
   const [idUpdate, setIdUpdate] = useState(0); // Initialize idUpdate state
       console.log(idUpdate+"  Id of todo")
  return (
    <>

    <form className="space-x-3 mt-12">
                          <input
                            type="text"
                            className="bg-gray-800 rounded border border-gray-700 
                            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
                            text-base outline-none text-gray-100 py-1 px-3 leading-8 
                            transition-colors duration-200 ease-in-out ms-2"
                            placeholder="Update you  Todo..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                          />
                            <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-4
                            focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            onClick={() => dispatch(updateTodo({ id: idUpdate, text: text }))}
                      
                          >
                            Update Now
                          </button>
      </form>

    <ul className="list-none">
              {todos.map((todo) => (
                <li
                  className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                  key={todo.id}
                >
                  <div className='text-white'>{todo.text}</div>
                  <button   style={{marginLeft:"70%"}}
                  className=" text-white bg-red-500 border-0 py-1 px-4 focus:outline-none 
                    hover:bg-red-600 rounded text-md" 
              
                    onClick={()=>{
                      setIdUpdate(todo.id);
                      setText(todo.text)}}>
                        Update</button>
                  <button
                  onClick={() => dispatch(removeTodo(todo.id))}  
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none 
                    hover:bg-red-600 rounded text-md"
                  >Delete
                   
                  </button>
                </li>
              ))}
</ul>
    </>
  )
}

export default Todos