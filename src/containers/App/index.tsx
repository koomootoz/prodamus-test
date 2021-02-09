import React, { FunctionComponent } from "react"
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { configureStore, history } from '../../store/configureStore'
import Routes from "../Routes"
import './styles.scss'

const store = configureStore()

const App: FunctionComponent<{}> = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
