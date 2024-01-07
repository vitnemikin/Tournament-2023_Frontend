import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
<<<<<<< Updated upstream
import store from './redux/store/store.js';
=======
import store from './redux/store/store.ts';
>>>>>>> Stashed changes
import './i18n.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
   </Provider>
);

