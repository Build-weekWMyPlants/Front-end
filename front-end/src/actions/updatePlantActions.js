import { axiosWithAuth } from "../utils/PrivateRoute"

export const UPDATE_PLANT_START = "UPDATE_PLANT_START"
export const UPDATE_PLANT_SUCCESS = "UPDATE_PLANT_SUCCESS"
export const UPDATE_PLANT_FAIL = "UPDATE_PLANT_FAIL"

export const updatePlantStart = plant => ({
    type: UPDATE_PLANT_START,
    payload: {
        ...plant
    }
})

export const updatePlantSuccess = plant =>({
    type: UPDATE_PLANT_SUCCESS,
    payload: {
        ...plant
    }
})

export const updatPlantFail = error => ({
    type: UPDATE_PLANT_FAIL,
    payload: error
})

export const updatePlant = () => {
    authAxios = axiosWithAuth()
    return dispatch => {
        dispatch(updatePlantStart());
        authAxios
        .put(`/api/plants/${plant.id}`, plantToEdit )
        .then(response => {
            dispatch(updatePlantSuccess(response.data))
        })
        .catch(error => {
            dispatch(updatePlantFail(error.response))
        })

    }
}