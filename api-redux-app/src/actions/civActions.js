import axios from "axios";

export const FETCH_CIV_START = "FETCH_CIV_START";
export const FETCH_CIV_SUCCESS = "FETCH_CIV_SUCCESS";
export const FETCH_CIV_FAILURE = "FETCH_CIV_FAILURE";
export const INCREMENT_QUERYID = "INCREMENT_QUERYID";
export const DECREMENT_QUERYID = "DECREMENT_QUERYID";

export const getCiv = queryID => dispatch => {
  console.log("did i");
  dispatch({ type: FETCH_CIV_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${queryID}`
    )
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_CIV_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_CIV_FAILURE, payload: err.response });
    });
};

export const nextCiv = () => {
  return { type: INCREMENT_QUERYID };
};

export const prevCiv = () => {
  return { type: DECREMENT_QUERYID };
};
