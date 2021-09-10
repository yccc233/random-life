
import './App.css';
import '../css/antd.css';

import {Route, BrowserRouter, Link, Redirect} from "react-router-dom";

import {GithubOutlined} from "@ant-design/icons";

import ChooseProps from "./ChooseProps/ChooseProps";
import {StartLife} from "./StartLife/StartLife";

import React from "react";

function App() {
  return (
      <BrowserRouter>
          <Route exact path='/' component={Start} />
          <Route exact path='/' component={HeadBar} />
          <Route path='/chooseprops' component={ChooseProps} />
          <Route path='/startlife/:name/:sex/:params' component={StartLife} />
          <FootBar />
      </BrowserRouter>
  );
}

/**
 * 开始页
 */
const Start = () => (
    <div className="App">
        <header className="App-header">
            <img src='/img/circle.png' className="App-logo" alt="logo" />
            <br />
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

const HeadBar = () => (
    <div className="headBar-style">
        <a href="https://github.com/yccc233/random-life">
            <GithubOutlined
                style={{fontSize: "25px", color: "lightblue"}}
            />
        </a>
    </div>
)

const FootBar = () => (
    <div>

    </div>
)

export default App;
