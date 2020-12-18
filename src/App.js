import './App.css';
import Header from '../src/Header/Header';
import Home from '../src/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from '../src/Checkout/Checkout';
import Login from './Login/Login';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HzeeBE7fSIpX85NKwNUjjpVPO22TeBxqFJDQtNGsn9EXOXQc3qnY4lRP9kkm8eIGy026DGmO60O4LCUlIfYtWiY00nCwDCdbV')
function App() {
  return (
    <Router>
    <div className="App">
      {/* {state.isUserLoggedIn ? <Header/> : null} */}
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
