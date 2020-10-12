import { CREATE_BOOKMARK, DELETE_BOOKMARK } from '../actions/actionTypes';

export default (state = [], { type, id, item }) => {
  switch (type) {
    case CREATE_BOOKMARK:
      return [
        ...state,
        {
          ...item,
        },
      ];

    case DELETE_BOOKMARK:
      return [...state].filter((bookmark) => bookmark.id !== id);
    default:
      return state;
  }
};
