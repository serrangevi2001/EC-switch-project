import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';// eslint-disable-next-line
import reportWebVitals from './reportWebVitals';// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import { configureStore } from './views/auth/redux/store';
// eslint-disable-next-line
import { Provider } from 'react-redux';

// eslint-disable-next-line
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={configureStore()}>
  {/* <React.Fragment> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </React.Fragment> */}
  </Provider>

);

// ReactDOM.render(
//   <Provider store={configureStore()}>

//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,

//   document.getElementById('root'),
// );

reportWebVitals();