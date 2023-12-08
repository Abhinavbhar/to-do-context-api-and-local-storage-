import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState ={
  todos:[{id:1,text:'hello world'}]
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addTodo:(state,action)=>{console.log('hello')},
    removeTodo:()=>{console.log('just')}
  }
})