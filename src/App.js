import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogoutButton';
import BestBooks from "./BestBooks"
import LoginButton from './components/LoginButton';
import Profile from "./components/Profile";
import { withAuth0 } from '@auth0/auth0-react';
class App extends React.Component {


  render() {
    console.log('app', this.props);
    let { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {/* <LogoutButton />
              <LoginButton /> */}
              
              <>
                {isAuthenticated &&
                  <>
                    <BestBooks />
                  </>
                }

              </>





            </Route>
            <Route exact path="/profile" >

              <Profile />

            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0 (App);
