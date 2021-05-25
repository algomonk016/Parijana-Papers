import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CollegeApp from './College-Website/Index'
import QuizApp from './Quiz-App/App'
import Quiz from './Quiz-App/Quiz'

function App() {
  return (
    <Router>
          <Switch>
            <Route path="/college" component={CollegeApp} />
            <Route path="/quizHome" component={QuizApp} />
            <Route path="/quiz" component={Quiz} />
          </Switch> 
    </Router>
  );
}
export default App;