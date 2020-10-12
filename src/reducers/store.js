import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { saveState, loadState } from '../utils/localStorage';

import rootReducers from '../reducers';

const configureStore = (preloadedState) =>
  createStore(rootReducers, preloadedState, applyMiddleware(thunk));

const preloadState = loadState();

const store = configureStore(preloadState);

store.subscribe(
  throttle(() => {
    saveState({ bookmarks: store.getState().bookmarks });
  }, 1000)
);

export default store;
