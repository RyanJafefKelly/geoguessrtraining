import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Topbar from './Topbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';

const loading = () => <div>loading...</div>

//pages
const Login = React.lazy(() => import('../pages/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Roads = React.lazy(() => import('../pages/Roads'));


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        
      <Router>
      <Topbar />
        <React.Suspense fallback={loading()}>
            <Container>
              <Switch>
              <Route exact path="/dashboard"  name="Dashboard" component={Dashboard} />
              <Route exact path="/" name="Login" component={Login} />
              <Route exact path="/roads" name="Roads" component={Roads} />

              </Switch>
            </Container>
        </React.Suspense>
      </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
