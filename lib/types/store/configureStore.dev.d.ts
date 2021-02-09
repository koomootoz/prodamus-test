import { AppState } from '../reducers/types';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (obj: Record<string, any>) => Function;
    }
    interface NodeModule {
        hot?: {
            accept: (path: string, cb: () => void) => void;
        };
    }
}
declare const _default: {
    configureStore: (initialState?: AppState | undefined) => import("redux").Store<AppState, import("redux").AnyAction>;
    history: import("history").History<unknown>;
};
export default _default;
//# sourceMappingURL=configureStore.dev.d.ts.map