import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Topbar from './Topbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";// Replace the previous LambdaDemo with the code below:

const client = new ApolloClient({
  uri: "/.netlify/functions/server"
});
// const LambdaDemo = () => (
//   <ApolloProvider client={client}>
//     <Query
//       query={gql`
//         {
//           hello
//         }
//       `}
//     >
//       {({ data }) =>
//         <div>A greeting from the server: {data.hello}</div>}
//     </Query>
//   </ApolloProvider>
// );
const loading = () => <div>loading...</div>

//pages
const Login = React.lazy(() => import('../pages/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Roads = React.lazy(() => import('../pages/Roads'));
const Basics = React.lazy(() => import('../pages/Basics'));
const Signs = React.lazy(() => import('../pages/Signs'));
const LicensePlates = React.lazy(() => import('../pages/LicensePlates'));
const Languages = React.lazy(() => import('../pages/Languages'));
const RegionalDifferences = React.lazy(() => import('../pages/RegionalDifferences'));
const Miscellaneous = React.lazy(() => import('../pages/Miscellaneous'));
const Profile = React.lazy(() => import ('../pages/Profile'));

function App() {

  return (
    <ApolloProvider client={client}>
        <Query
          query={gql`
            {
              hello
            }
          `}
        >
          {({ data }) =>
            <div>A greeting from the server: {data?.hello}</div>}
        </Query>
      </ApolloProvider>
    // <ThemeProvider theme={theme}>
    //   <>
    //     <GlobalStyles />
        
    //   <Router>
    //   <Topbar />
    //     <React.Suspense fallback={loading()}>
    //         <Container>
    //           <Switch>
    //           <Route exact path="/dashboard"  name="Dashboard" component={Dashboard} />
    //           <Route exact path="/" name="Login" component={Login} />
    //           <Route exact path="/profile" name="Profile" component={Profile} />
    //           <Route exact path="/basics" name="Basics" component={Basics} />
    //           <Route exact path="/roads" name="Roads" component={Roads} />
    //           {/* <Route exact path="/roads" name="Roads" component={Roads} /> */}
    //           <Route exact path="/signs" name="Signs" component={Signs} />
    //           <Route exact path="/license-plates" name="License Plates" component={LicensePlates} />
    //           <Route exact path="/languages" name="Languages" component={Languages} />
    //           <Route exact path="/regional-differences" name="Regional Difference" component={RegionalDifferences} />
    //           <Route exact path="/miscellaneous" name="Miscellaneous" component={Miscellaneous} />
    //           </Switch>
    //         </Container>
    //     </React.Suspense>
    //   </Router>
    //   </>
    // </ThemeProvider>
  );
}

export default App;
