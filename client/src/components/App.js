import React, { Component } from 'react'
import {BrowserRouter as Route, Switch} from 'react-router-dom';
import routes from '../routes';

export default class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map(({path, exact, component: C, ...rest}, key) => (
          <Route
            key = {key}
            path = {path}
            exact = {exact}
            render = {(props) => (
              <C {...props} {...rest} />
            )}
          />
        ))}
      </Switch>
    )
  }
}