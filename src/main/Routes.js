import React from 'react'

import Login from '../views/Login'
import ProjectsList from '../views/ProjectsList'
import ProjectsUpdate from '../views/ProjectsUpdate'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/#" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/projects" component={ProjectsList}/>
        <Route exact path="/projects/update/:id?" component={ProjectsUpdate}/>
      </Switch>
    </HashRouter>
  )
}

export default Routes