import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Child from './Child';
import Heading from './Heading';
import MyChat from './components/MyChat';

ReactDOM.render(
  <React.StrictMode>
  <div>
  <App />,
  <Heading />,
    <Child />,
    <MyChat />
    </div>
      </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
