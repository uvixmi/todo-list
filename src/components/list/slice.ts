import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ListItem, TodoState } from "./types"
import { LOCAL_STORAGE_KEY } from "./constants"

const initialState: TodoState = {
  list: [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newItem: ListItem = {
        title: action.payload.title,
        completed: false,
      }
      state.list.push(newItem)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.list))
    },
    toggleTodo: (state, action: PayloadAction<{ title: string }>) => {
      const index = state.list.findIndex(
        (item) => item.title === action.payload.title
      )
      state.list[index].completed = !state.list[index].completed
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.list))
    },
    removeTodo: (state, action: PayloadAction<{ title: string }>) => {
      state.list = state.list.filter(
        (item) => item.title !== action.payload.title
      )
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.list))
    },
    fetchTodos: (state) => {
      const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
      state.list = storedTodos ? JSON.parse(storedTodos) : []
    },
    setTodos: (state, action: PayloadAction<ListItem[]>) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload))
      state.list = action.payload
    },
  },
})

export const { addTodo, toggleTodo, removeTodo, fetchTodos, setTodos } =
  todoSlice.actions
export default todoSlice.reducer
