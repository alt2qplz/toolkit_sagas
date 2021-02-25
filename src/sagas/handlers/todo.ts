import { call, put } from "redux-saga/effects";
import { setTodo } from '../../features/todo/todoSlice'
import { requestGetTodo } from '../requests/todo'

export function* handleGetUser() {
  try {
    const response = yield call(requestGetTodo);
    const { data } = response;
    //Диспастчим дату в стор
    yield put(setTodo({ ...data }));
  } catch (error) {
    console.log(error);
  }
}