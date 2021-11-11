import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './config/redux/store';
import TheBookTownApplication from './router';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <TheBookTownApplication />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
