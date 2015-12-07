import React from 'react';
import { render } from 'react-dom';
// import { createHistory, useBasename } from 'history';
import { Router, Route, Link } from 'react-router';
// import Greeting from "./greeting";

// React.render(<Greeting name="World"/>, document.body);

// const history = useBasename(createHistory)({
//  basename: '/'
// });

const App = React.createClass({
  render() {
    return (
      <div>
        <p>This is home..123.</p>
        <Link to="/about">About</Link>
      </div>
    );
  }
});

const About = React.createClass({
  render() {
    return (
      <div>
        <p>This is about.</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
});

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router>
);

render(routes, document.getElementById('react'));

