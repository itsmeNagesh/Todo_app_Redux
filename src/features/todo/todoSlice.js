import {createSlice, nanoid } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

let initialState = {
    todos: [{id:1, text: " "}],
//  const [myId,setMyId]=useState=({id})


}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
               // id: nanoid(), 
             //    id:Math.random().toString(),
             id:uuidv4(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        // updateTodo:(state,action)=>{
        //     console.log("Now update")
        //     state.todos=state.todos.filter((todo)=>{
        //         if(todo.id===action.payload){
        //             todo.text=action.payload
        //         }
        //     })

        // }
        updateTodo: (state, action) => {
            console.log("Now update")
            // In your current implementation, you're filtering the todos array, which is incorrect for updating.
            // You should find the specific todo by its id and update its text.
            const { id, text } = action.payload;
           alert(id+'    ID ' +text+"     text")
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }else{
                console.log("error")
            }
        }
        
    }
})

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer