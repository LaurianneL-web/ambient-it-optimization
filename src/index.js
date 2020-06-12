import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import HttpsRedirect from 'react-https-redirect';

import { persistor, store } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Spin } from "antd";

import Routing  from './Routing';
// const Routing = lazy(() => import('./Routing'));

require("dotenv").config();
// for developement purposes
// persistor.purge()

ReactDOM.render(
  <HttpsRedirect>
     <Provider store={store}>
       <PersistGate loading={<Spin />} persistor={persistor}>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Routing />
        {/* </Suspense> */}
       </PersistGate>
     </Provider>
  </HttpsRedirect>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
