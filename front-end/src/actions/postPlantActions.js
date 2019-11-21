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

export const postPlant = (plant) => dispatch =>{
    console.log("POST PLANT", plant)
    const authAxios = axiosWithAuth
    
        dispatch(postPlantStart());
        authAxios()
        .post("/plants/7", plant)
        .then(response => {
            dispatch(postPlantSuccess(response.data));
            console.log("POST PLANT SUCCESS", response.data)
        })
        .catch(error => {
            dispatch(postPlantFail(error.response));
            console.log("POST PLANT FAIL", error)
        })
    
}