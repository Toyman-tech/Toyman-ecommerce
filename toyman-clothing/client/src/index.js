import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';


import {store} from './redux/store';
import { persistor } from './redux/store';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
       <PersistGate persistor={persistor}>
        <App />
       </PersistGate>
      </BrowserRouter>
    </Provider>  
  </React.StrictMode>
);

