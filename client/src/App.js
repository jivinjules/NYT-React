import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Title from './components/Title'
import Jumbotron from './components/Jumbotron'
import './App.css'


const App = () => (
  <Router>
     
      <div>
        <Title />
        <Jumbotron />
        <Switch>
        <Route exact path='/' component={Articles} />
        <Route exact path='/articles' component={Articles} />
        <Route path='/articles/:id' component={Detail} />
        <Route component={NoMatch} />
        </Switch>
        </div>

   
  </Router>

);

export default App;