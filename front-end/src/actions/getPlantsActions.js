import { axiosWithAuth } from "../utils/PrivateRoute";

export const GET_PLANTS_START = "GET_PLANTS_START";
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS";
export const GET_PLANTS_FAIL = "GET_PLANTS_FAIL";

export const getPlantsStart = () => ({
  type: GET_PLANTS_START
});

export const getPlantsSuccess = data => ({
  type: GET_PLANTS_SUCCESS,
  payload: data
});

export const getPlantFail = error => ({
  type: GET_PLANTS_FAIL,
  payload: error
});

export const getPlants = (user) => {
  return function(dispatch) {
    dispatch(getPlantsStart());

    const authAxios = axiosWithAuth();
    authAxios
      .get(`/api/plants/${user.id}`)
      .then(response => {
        dispatch(getPlantsSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => dispatch(getPlantFail(error)));
  };
};
