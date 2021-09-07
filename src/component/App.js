import logo from './logo.svg';
import './App.css';

import {Route, BrowserRouter} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <Route exact path='/' component={Start} />
          <Route path='/homepage' component={HomePage} />
      </BrowserRouter>
  );
}

const Start = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                随机人生重置版！
            </p>
            <a
                className="App-link"
                href="/homepage"
                target="_blank"
                rel="noopener noreferrer"
            >
                开始你的异世界之旅吧！
            </a>
        </header>
    </div>
)

const HomePage = () => (
    <div>
        <p>hello this is my home page!</p>
    </div>
)


export default App;
