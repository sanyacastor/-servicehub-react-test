import { combineReducers } from 'redux';
import trendsReduser from './trendsReducer.js';
import bookmarksReducer from './bookmarksReducer';

export default combineReducers({
  trends: trendsReduser,
  bookmarks: bookmarksReducer,
});
