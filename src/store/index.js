import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';

import rootReducers from '../reducers';

const configureStore = (persistConfig) => {
  const persistedReducer = persistReducer(persistConfig, rootReducers);

  const store = createStore(persistedReducer, applyMiddleware(thunk));

  return store;
};

export default configureStore;
