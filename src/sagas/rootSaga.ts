import { takeLatest } from "redux-saga/effects"
import { getTodo } from '../features/todo/todoSlice'
import { handleGetUser } from './handlers/todo'

export function* watcherSaga() {
  //Получаем тип action и передаем в вотчер
  console.log(getTodo.type)
  yield takeLatest(getTodo.type, handleGetUser);
}