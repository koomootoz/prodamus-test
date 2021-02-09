import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';
import { RouterState } from 'connected-react-router';
import { LessonsState } from "./lessons/types";
export interface AppState {
    router: RouterState;
    lessons: LessonsState;
}
export declare type Dispatch = ReduxDispatch<Action<string>>;
export declare type Store = ReduxStore<AppState, Action<string>>;
//# sourceMappingURL=types.d.ts.map