import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path='/' render={props=>(
          <Login/>
        )}
        />
        <Route exact path='/home' render={props=>(
          <React.Fragment>
<Header />
        <Home />

          </React.Fragment>
        )}
        />
      </div>
      </Router>

    );
  }
}

export default App;
