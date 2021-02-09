import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { AppState } from './types'
import lessonsReducer from "./lessons";

export default function createRootReducer(history: History): Reducer<AppState> {
  return combineReducers<AppState>({
    router: connectRouter(history),
    lessons: lessonsReducer,
  })
}
