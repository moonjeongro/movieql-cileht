import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <Detail />
        </Route>
      </Router>
    </div>
  );
}

export default App;