import React from 'react';
import Document from '../container/Document';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/markdown" component={Document} />
        <Route exact path="/markdown/:title" component={Document} />
      </Switch>
    </Router>
      <h1>Markdown Editor</h1>
    </>
  );
}
