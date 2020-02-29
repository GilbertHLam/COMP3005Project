import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"
import Home from './pages/home';


function App () {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <ThemeProvider theme={theme}>
              <Home />
            </ThemeProvider>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
