import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "../actions/Loginactions";
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/createUserActions";
import {
  POST_PLANT_START,
  POST_PLANT_SUCCESS,
  POST_PLANT_FAIL
} from "../actions/postPlantActions";
// import {
//   DELETE_PLANT_START,
//   DELETE_PLANT_SUCCESS,
//   DELETE_PLANT_FAIL
// } from "../actions/deletePlantActions";
// import {
//   UPDATE_PLANT_START,
//   UPDATE_PLANT_SUCCESS,
//   UPDATE_PLANT_FAIL
// } from "../actions/updatePlantActions";
// import {
//   GET_PLANTS_START,
//   GET_PLANTS_SUCCESS,
//   GET_PLANTS_FAIL
// } from "../actions/getPlantsActions";



const newUserState = () => ({
  username: "",
  password: "",
  primaryemail: ""
});


export const signUpreducer = (state = newUserState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        username: action.payload,
        password: action.payload,
        primaryemail: action.payload
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
const userState = () => ({
  username: "",
  password: ""
});
export const loginReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        username: action.payload,
        password: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
const newPlantState = () => ({
  nickname: "",
  photo: "",
  plantType: ""
});
export const addPlantReducer = (state = newPlantState, action) => {
  switch (action.type) {
    case POST_PLANT_START:
      return {
        ...state,
        ninckname: action.payload,
        photo: action.payload,
        plantType: action.payload
      };
    case POST_PLANT_SUCCESS:
      return {
        ...state
      };
    case POST_PLANT_FAIL:
      return {
        ...state,
        error: action.payload
      };
      default:
      return state
  }
};

