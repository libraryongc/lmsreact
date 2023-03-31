import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Checkout from './components/Checkout';
import Register from './components/register';
import './App.css'

const App = () => {
  return (
    <>
    <Register/>
    <BookList/>
    </>
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Switch>
    //       <Route exact path="/">
    //         <h2>Welcome to our Library!</h2>
    //       </Route>
    //       <Route exact path="/books">
    //         <BookList />
    //       </Route>
    //       <Route path="/books/:id">
    //         <BookDetails />
    //       </Route>
    //       <Route path="/checkout">
    //         <Checkout />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;
