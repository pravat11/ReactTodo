import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/configureStore';

const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById('root')
  );
};

store.subscribe(render);
render();

