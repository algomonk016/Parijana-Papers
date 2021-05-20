import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CollegeApp from './College-Website/Index'

function App() {
  return (
    <Router>
          <Switch>
            <Route path="/college" component={CollegeApp} />
          </Switch> 
    </Router>
  );
}
export default App;