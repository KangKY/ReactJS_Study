import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

/*
local state를 유지하지 못하는 문제가 있음
=> Redux 개발자가 react-hot-loader를 개발함
if(module.hot) {
  module.hot.accept();
}*/
