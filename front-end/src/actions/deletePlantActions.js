import { axiosWithAuth } from "../utils/PrivateRoute"

export const DELETE_PLANT_START = "DELETE_PLANT_START"
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS"
export const DELETE_PLANT_FAIL = "DELETE_PLANT_FAIL"

export const deletePlantStart = plant => ({
    type:DELETE_PLANT_START,
    payload: {
        ...plant
    }
})
export const deletePlantSuccess = plant => ({
    type: DELETE_PLANT_SUCCESS,
    payload: {
        ...plant
    }
})

export const deletePlantFail = error => ({
    type: DELETE_PLANT_FAIL,
    payload: error
})

export const deletePlant = plant => {
    const authAxios = axiosWithAuth();
    return dispatch => {
        dispatch(deletePlantStart());
        authAxios
        .delete(`/api/plants/${plant.id}`, plant)
        .then(response => {
            dispatch(deletePlantSuccess(response))
        })
        .catch(error => {
            dispatch(deletePlantFail(error.response))
        })
}}