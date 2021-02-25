import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store'

interface TodoState {
  todo: {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  } | null
}

const initialState: TodoState = {
  todo: null,
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    //Пустая функция, запуск которой перехватит сага-вотчер
    getTodo() {},
    setTodo(state, action) {
      state.todo = action.payload
    }
  },
});

//экспорт actions
export const { setTodo, getTodo } = todoSlice.actions;

//селектор части состония
export const myTodo = (state: RootState) => state.todoList.todo;

//экспорт редюсера
export default todoSlice.reducer;
