import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import {configureStore} from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
 if (process.env.NODE_ENV ==='development'){
    middlewares.push(logger);
 }
 //export const store   = createStore(rootReducer, 
export const store   = configureStore ({ reducer:  rootReducer,    
middleware: middlewares}) 

 sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
console.log(store);