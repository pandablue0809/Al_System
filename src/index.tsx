import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { store } from './store/store';
import './assets/css/tailwind.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <GoogleOAuthProvider clientId='502509040228-pl2r196efpakpbsie4433bmakhbca3rp.apps.googleusercontent.com'>
          <App />
        </GoogleOAuthProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
