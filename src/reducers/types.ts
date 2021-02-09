import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux'
import { RouterState } from 'connected-react-router'
import {LessonsState} from "./lessons/types"

export interface AppState {
  router: RouterState,
  lessons: LessonsState,
}

export type Dispatch = ReduxDispatch<Action<string>>

export type Store = ReduxStore<AppState, Action<string>>
