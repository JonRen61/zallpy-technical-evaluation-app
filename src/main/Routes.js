import React from 'react'

import Login from '../views/Login'
import ProjectsList from '../views/ProjectsList'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/projects" component={ProjectsList}/>
      </Switch>
    </HashRouter>
  )
}

export default Routes