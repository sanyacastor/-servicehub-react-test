import {
  FETCH_TRENDS,
  FETCH_TRENDS_RESOLVE,
  FETCH_TRENDS_REJECT,
  UPDATE_TRENDS,
} from './actionTypes';

export const fetchTrends = (getData) => {
  return (dispatch, getState) => {
    dispatch(trendsAction());
    return getData()
      .then((res) => dispatch(trendsResolveAction(res)))
      .catch((err) => dispatch(trendsRejectAction(err)));
  };
};

export const updatetrendsAction = (payload) => ({
  type: UPDATE_TRENDS,
  payload: {
    items: payload.items,
    nextPage: payload.nextPageToken,
  },
});

export const trendsAction = () => ({
  type: FETCH_TRENDS,
});

export const trendsResolveAction = (payload) => ({
  type: FETCH_TRENDS_RESOLVE,
  payload: {
    items: payload.items,
    nextPage: payload.nextPageToken,
  },
});

export const trendsRejectAction = (err) => ({
  type: FETCH_TRENDS_REJECT,
  err,
});
