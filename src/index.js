import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { Provider } from 'react-redux';
import configureStore from './store';
import crossBrowserListener from './utils/reduxpersist-listener';
import Spinner from './components/spinner';

import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const store = configureStore(persistConfig);
const persistor = persistStore(store);

window.addEventListener('storage', crossBrowserListener(store, persistConfig));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
