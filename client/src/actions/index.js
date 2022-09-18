import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";


export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  // the res object below is the output of the axios call above; it represents the underlying request that was made to the backend server.  We are only interested in the 'data' property attached to the res object so that's why we changed 'res' below to 'res.data'
  
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data })
}