import {
  FETCH_CIV_START,
  FETCH_CIV_SUCCESS,
  FETCH_CIV_FAILURE,
  INCREMENT_QUERYID,
  DECREMENT_QUERYID
} from "../actions";

const initialState = {
  civData: { name: "", army_type: "", team_bonus: "", civilization_bonus: [] },
  queryID: 1,
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CIV_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CIV_SUCCESS:
      return {
        ...state,
        civData: action.payload,
        isFetching: false
      };
    case FETCH_CIV_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    //Check to see if at last civ before incrementing to avoid breaking API request
    case INCREMENT_QUERYID:
      if (state.queryID <= 17)
        return {
          ...state,
          queryID: state.queryID + 1
        };
      else return state;
    //Check to see if at first civ before decrementing to avoid breaking API request
    case DECREMENT_QUERYID:
      if (state.queryID > 1)
        return {
          ...state,
          queryID: state.queryID - 1
        };
      else return state;
    default:
      return state;
  }
};
