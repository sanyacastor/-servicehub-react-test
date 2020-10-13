import {
  CREATE_BOOKMARK,
  DELETE_BOOKMARK,
  UPDATE_BOOKMARK,
} from './actionTypes';

export const createBookmarkAction = (payload) => ({
  type: CREATE_BOOKMARK,
  id: payload.id,
  item: payload.item,
});

export const updateBookmarkAction = (payload) => ({
  type: UPDATE_BOOKMARK,
  newState: payload.newState,
});

export const deleteBookmarkAction = (payload) => ({
  type: DELETE_BOOKMARK,
  id: payload.id,
});
