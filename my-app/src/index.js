import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import store from './redux/reduxStore'; // Adjusted path to Redux store
// import rootReducer from './reducers'; 
// const store = createStore(rootReducer);



ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
