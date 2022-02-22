import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') { // Remove redux-logger from production build
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// The persistStore ensures the redux state is saved to persisted storage whenever it changes
export const persistor = persistStore(store);


