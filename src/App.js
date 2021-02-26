import React, {Component} from "react";
import {connect} from 'react-redux';

import './App.style.scss';

import Homepage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage.component';
import CheckoutPage from './pages/Checkout/Checkout.component';
import {auth, createUserProfileDocument} from './Firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

import { Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/Header/Header.component';
import { setCurrentUser } from "./redux/user/user.action";

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        })
      }
      setCurrentUser(userAuth)
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.props;
    return (
      <div id="App">
        <Header currentUser={currentUser}/>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route exact path="/checkout" component={CheckoutPage}/>
            <Route exact path="/sign-in" render={()=> currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
