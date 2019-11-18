import axios from "axios"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

//login actions
export const loginStart = (data) => ({
    type: LOGIN_START,
    payload: data
});
export const loginSccess = token => ({
    type: LOGIN_SUCCESS,
    payload: token
})
export const loginFail = error => ({
    tpye: LOGIN_FAIL,
    Payload: error
})

export const login = e => {
    e.preventDefault();
    axios
    .get("/signin" , data)
    .then(response => {
        console.log("LOGIN",response.data);
        dispatch(loginSuccess(response.data));
        const { data } = response;
        localStorage.setItem("token", data.payload);
    })
    .catch(error => {
        dispatch(loginFail(error.response))
    })
}