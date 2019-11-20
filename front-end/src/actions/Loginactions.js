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
function axiosLogin() {
  const clientId = "lambda-client";
  const clientSecret = "lambda-secret";
  return axios.create({
    baseURL: "https://vdtyson-watermyplants.herokuapp.com",
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
}
export const login = (user) => {
  return dispatch => {
    axiosLogin()
      .post(
        "/login",
        `grant_type=password&username=${user.username}&password=${user.password}`
      )
      .then(response => {
        dispatch(loginSuccess(response.data));
        console.log("LOGIN SUCCESS", response.data);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("token_type", response.data.token_type);
      })
      .catch(error => {
        dispatch(loginFail(error.response));
        console.log("LOGIN ERROR", error, user);
      });
  };
};
// export const login = data => {
//   return dispatch => {
//     axiosWithAuth()
//       .post("/login", data)
//       .then(response => {
//         dispatch(loginSuccess(response.data));
//         console.log("LOGIN SUCCESS", response.data);
//         localStorage.setItem("token", response.data.access_token);
//         localStorage.setItem("token_type", response.data.token_type);
//       })
//       .catch(error => {
//         dispatch(loginFail(error.response));
//         console.log("LOGIN ERROR", error, data);
//       });
//   };
// };
