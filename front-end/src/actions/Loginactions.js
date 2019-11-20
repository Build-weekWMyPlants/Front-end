import axios from "axios";
import { axiosWithAuth } from "../utils/PrivateRoute";


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

//login actions
export const loginStart = data => ({
  type: LOGIN_START,
  payload: data
});
export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
});
export const loginFail = error => ({
  type: LOGIN_FAIL,
  Payload: error
});

export const login = data => {
  
  return dispatch => {
    axiosWithAuth()
      .post("/login", data, {grant_type: 'password'})
      .then(response => {
        dispatch(loginSuccess(response.data));
        console.log("LOGIN SUCCESS", response.data);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("tokenType", response.data.token_type)
      })
      .catch(error => {
        dispatch(loginFail(error.response));
        console.log("LOGIN ERROR", error, data)
      });
  };
};
