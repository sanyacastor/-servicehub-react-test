import { CREATE_BOOKMARK, DELETE_BOOKMARK } from './actionTypes';

export const createBookmarkAction = ({ id, item }) => ({
  type: CREATE_BOOKMARK,
  id,
  item,
});

export const deleteBookmarkAction = ({ id }) => ({
  type: DELETE_BOOKMARK,
  id,
});
