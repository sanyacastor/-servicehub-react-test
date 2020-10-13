import {
  FETCH_TRENDS,
  FETCH_TRENDS_RESOLVE,
  FETCH_TRENDS_REJECT,
  UPDATE_TRENDS,
} from '../actions/actionTypes';

// export interface trends  {
//   payload: Object | null,
//   error: String | null,
//   isBisy: Boolean,
// }

const initialState = {
  payload: null,
  error: null,
  isBisy: true,
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_TRENDS:
      return { payload: [], error: null, isBisy: true };
    case FETCH_TRENDS_RESOLVE:
      return { payload: payload, error: null, isBisy: false };
    case FETCH_TRENDS_REJECT:
      return { payload: null, error: error, isBisy: false };
    case UPDATE_TRENDS:
      return {
        ...state,
        payload: {
          items: [...state.payload.items, ...payload.items],
          nextPage: payload.nextPage,
        },
      };
    default:
      return state;
  }
};
