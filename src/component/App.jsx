import logo from './logo.svg';
import './App.css';
import '../css/antd.css';

import {Route, BrowserRouter, Link} from "react-router-dom";

import ChooseProps from "./ChooseProps/ChooseProps";
import {StartLife} from "./StartLife/StartLife";

import React from "react";

function App() {
  return (
      <BrowserRouter>
          <Route exact path='/' component={Start} />
          <Route path='/chooseprops' component={ChooseProps} />
          <Route path='/startlife/:name/:sex/:params' component={StartLife} />
      </BrowserRouter>
  );
}

/**
 * 开始页
 */
const Start = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                随机人生重置版！
            </p>
            <Link
                className="App-link"
                to="/chooseprops"
            >
                开始你的异世界之旅吧！
            </Link>
        </header>
    </div>
)


export default App;
