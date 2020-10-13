import {
  CREATE_BOOKMARK,
  DELETE_BOOKMARK,
  UPDATE_BOOKMARK,
} from '../actions/actionTypes';

export default (state = [], { type, id, item, newState }) => {
  switch (type) {
    case CREATE_BOOKMARK:
      return [...state, item];

    case UPDATE_BOOKMARK:
      return [...newState];

    case DELETE_BOOKMARK:
      return [...state].filter((bookmark) => bookmark.id !== id);
    default:
      return state;
  }
};
