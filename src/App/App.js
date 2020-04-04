import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Topbar from './Topbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import useOnClickOutside from '../utils/useOnClickOutside';

const loading = () => <div>loading...</div>

//pages
const Login = React.lazy(() => import('../pages/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Topbar />
            <Container>
              <Switch>
              <Route exact path="/dashboard" name="Dashboard" render={ props => <Dashboard {...props} />}/>
              <Route exact path="/" name="Login" render={ props => <Login {...props} />}/>
              </Switch>
            </Container>
        </React.Suspense>
      </HashRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
