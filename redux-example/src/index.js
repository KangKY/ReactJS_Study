import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

// store 생성
const store = createStore(reducers);


// state 의 변화가 있을 때
/*const unsubscribe = store.subscribe(()=> console.log(store.getState()));
store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([0,0,0]));

unsubscribe();

store.dispatch(actions.setColor([100,100,100]));*/

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);
