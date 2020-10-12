import { combineReducers } from 'redux';
import trendsReduser from './trendsReducer';
import bookmarksReducer from './bookmarksReducer';

export default combineReducers({
  trends: trendsReduser,
  bookmarks: bookmarksReducer,
});
