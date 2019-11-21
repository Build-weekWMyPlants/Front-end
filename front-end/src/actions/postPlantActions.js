import { axiosWithAuth } from "../utils/PrivateRoute";
import axios from "axios";
export const POST_PLANT_START = "POST_PLANT_START";
export const POST_PLANT_SUCCESS = "POST_PLANT_SUCCESS";
export const POST_PLANT_FAIL = "POST_PLANT_FAIL";

export const postPlantStart = plant => ({
  type: POST_PLANT_START,
  payload: plant
});

export const postPlantSuccess = plant => ({
  type: POST_PLANT_SUCCESS,
  payload: {
    ...plant
  }
});

export const postPlantFail = error => ({
  type: POST_PLANT_FAIL,
  payload: error
});

export const postPlant = plant => dispatch => {
  const username = localStorage.getItem("username");
  console.log("POST PLANT", plant);
  const authAxios = axiosWithAuth;
  axios
    .get(
      `https://vdtyson-watermyplants.herokuapp.com/plants/username/${username}`
    )
    .then(response => {
      const userID = response.data;
      dispatch(postPlantStart());
      authAxios()
        .post(`/plants/${userID}`, plant)
        .then(response => {
          dispatch(postPlantSuccess(response.data));
          console.log("POST PLANT SUCCESS", response.data);
        })
        .catch(error => {
          dispatch(postPlantFail(error.response));
          console.log("POST PLANT FAIL", error);
        });
    })
    .catch(error => {
      console.log("POST ERROR", error);
    });
};
