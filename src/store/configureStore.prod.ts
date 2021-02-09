import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers'
import { Store, AppState } from '../reducers/types'

const history = createBrowserHistory()
const rootReducer = createRootReducer(history)
const router = routerMiddleware(history)
const enhancer = applyMiddleware(router)

function configureStore(initialState?: AppState): Store {
  return createStore(rootReducer, initialState, enhancer)
}

export default { configureStore, history }
