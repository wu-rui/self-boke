import React, { Component } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  NavLink
  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NameCrad from './components/NameCard';
import LikesButton from './components/Message/LikesButton'
import DigitalClock from './components/Message/DigitalClock'
import MessageBox from './components/Message/MessageBox'
const tags = ['恐龙', '你好像是的']
class App extends Component {
  render() {
    return (

      <div className="App">          
        <header className="App-header">
       
        </header>
        <Router>
            <div>
              <div className="navbar">
                <NavLink exact activeClassName="active" to="/">主页</NavLink>
                <NavLink activeClassName="active" to="/about">新闻</NavLink> 
                <NavLink activeClassName="active" to="/other">其他</NavLink>
              </div>
             
               <hr />
              <Route exact path="/" Component={LikesButton}></Route>
              <Route exact path="/about" Component={DigitalClock}></Route>
              <Route exact path="/other" Component={MessageBox}></Route>
            </div>
          </Router>
        <NameCrad name="wurui" number="2345678" isHUman tags={tags} />
        <LikesButton />
        <DigitalClock />
        <MessageBox />
        <footer className="App-header"></footer>
      </div>
    );
  }
}

export default App;


