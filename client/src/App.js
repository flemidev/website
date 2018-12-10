import React, { Component } from 'react';
import './App.css';
import NavForm from './components/NavForm';
import SideBar from './components/SideBar';
import Post from './components/Post';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="mainwrapper">
          <a href="/" id="logo">
            <div id="logoimage">
              <img src="/images/flemi_small.svg" alt=""></img>
            </div>
            <div id="logotext">
              <span>
                Flemi
              </span>
            </div>
          </a>
          <div id="navigationcontent">
            <NavForm>
            </NavForm>
          </div>
          <div id="sidebarwrapper">
            <SideBar>
            </SideBar>
          </div>
            <Route path="/" exact render={(props) => <Post {...props} text="home" />}>
            </Route>
            <Route path="/post/art" exact render={(props) => <Post {...props} text="art" />}>
            </Route>
            <Route path="/post/code" exact render={(props) => <Post {...props} text="code" />}>
            </Route>
            <Route path="/post/currentlybuilding" exact render={(props) => <Post {...props} text="currentlybuilding" />}>
            </Route>
            <Route path="/post/contact" exact render={(props) => <Post {...props} text="contact" />}>
            </Route>
        </div>
      </Router>
    );
  }
}
export default App;
