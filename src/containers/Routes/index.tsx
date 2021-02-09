import React, {FunctionComponent, Suspense, lazy } from "react"
import { Route, Redirect, Switch } from 'react-router-dom'
import LoadingScreen from "../LoadingScreen"

const LessonViewer = lazy(() => import('../LessonViewer'))

interface Props {}

const Routes: FunctionComponent<Props> = () => {
  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/lesson/make"/>
        </Route>
        <Route exact path="/lesson/view/:id" component={LessonViewer}/>
        <Route exact path="/lesson/make" component={LessonViewer}/>
        <Route>
          Not found
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Routes
