import React from 'react'
import './app.scss';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/routes/Home'
import Services from './components/routes/Services'
import Projects from './components/routes/Projects'
import Contact from './components/routes/Contact'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/services' exact component={Services}></Route>
        <Route path='/projects' exact component={Projects}></Route>
        <Route path='/contact' exact component={Contact}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
