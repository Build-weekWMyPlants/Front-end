import { axiosWithAuth } from "../utils/PrivateRoute";

export const POST_PLANT_START = "POST_PLANT_START"
export const POST_PLANT_SUCCESS = "POST_PLANT_SUCCESS"
export const POST_PLANT_FAIL = "POST_PLANT_FAIL"

export const postPlantStart = plant => ({
    type: POST_PLANT_START,
    payload: plant
})

export const postPlantSuccess = plant => ({
    type: POST_PLANT_SUCCESS,
    payload:{
        ...plant
    }
})

export const postPlantFail = error => ({
    type: POST_PLANT_FAIL,
    payload: error
})

export const postPlant = (nickname, species, h20frequency) => {
    const authAxios = axiosWithAuth()
    return dipatch => {
        dispatchEvent(postPlantStart());
        authAxios
        .post("/api/plants", {
            nickname,
            species, 
            h20frequency
        })
        .then(response => {
            dispatchEvent(postPlantSuccess(response.data))
        })
        .catch(error => {
            dipatch(postPlantFail(error.response))
        })
    }
}