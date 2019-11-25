import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import TheDoctor from './Containers/TheDoctor';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(props) => <TheDoctor {...props}/>}/>
      </Router>
    </div>
  );
}

export default App;
