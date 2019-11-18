import { axiosWithAuth } from "../utils/PrivateRoute";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

export const createUserStart = user => ({
  type: CREATE_USER_START,
  payload: user
});

export const createUserSuccess = user => ({
  type: CREATE_USER_SUCCESS,
  payload: {
    ...user
  }
});

export const createUserFail = error => ({
  type: CREATE_USER_FAIL,
  payload: {
    error
  }
});

export const signUp = (username, phonenumber, password) => {
  const authAxios = axiosWithAuth();
  return dispatch => {
    dispatch(createUserStart());

    authAxios.post("/api/signup", {
      username,
      phonenumber,
      password
    })
    .then(response => {
        dispatch(createUserSuccess(response.data))
    })
    .catch(error => {
        dispatch(createUserFail(error.response))
    })
  };
};
