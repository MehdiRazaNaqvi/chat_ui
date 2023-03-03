import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './router.jsx';
import reportWebVitals from './reportWebVitals';
import store from "../src/store/store"


import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


import { persistStore } from 'redux-persist';


let persistor = persistStore(store);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>


  <PersistGate loading={null} persistor={persistor}>

    <App />


  </PersistGate>
</Provider>
);




reportWebVitals();
