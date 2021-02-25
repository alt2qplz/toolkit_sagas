import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../sagas/rootSaga'
import todoReducer from '../features/todo/todoSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware] as const
});

sagaMiddleware.run(watcherSaga)


export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
