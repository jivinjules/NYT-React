import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Title from './components/Title'


const App = () => (
  <Router>
     
      <div>
        <Title />
        <Switch>
        <Route exact path='/' component={Articles} />
        <Route exact path='/Articles' component={Articles} />
        <Route path='/Articles/:id' component={Detail} />
        <Route component={NoMatch} />
        </Switch>
        </div>

   
  </Router>

);

export default App;