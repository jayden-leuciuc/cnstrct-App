import React from 'react'
import './app.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/routes/Home'
import Services from './components/routes/Services'
import Support from './components/routes/Support'
import SignUp from './components/routes/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/services' exact component={Services}></Route>
        <Route path='/support' exact component={Support}></Route>
        <Route path='/sign-up' exact component={SignUp}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
