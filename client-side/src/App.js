import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import CollegeApp from './College-Website/Index'

function App() {
  return (
    <Router>
          <switch>
            <Route path="/college" component={CollegeApp} />
          </switch> 
    </Router>
  );
}
export default App;