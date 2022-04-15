import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import bg from './images/bg.png';
import rootReducer from './redux/root-reducer';
import { App } from './components/app';

const GlobalStyle = createGlobalStyle`
  ${reboot()}

  body {
    background: url(${bg})
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
`;

const store = createStore(rootReducer);

const app = (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

ReactDOM.render(app, document.getElementById('root'));
