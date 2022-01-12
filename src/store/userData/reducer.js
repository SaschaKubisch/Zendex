import {
  GET_INDEX_SETUP_SUCCESS,
  GET_INDEX_SETUP_FAIL
} from "./actionTypes"

const INIT_STATE = {
  indexSetup: [],
}

const UserData = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_INDEX_SETUP_SUCCESS:
      return {
        ...state,
        indexSetup: action.payload,
      }

    case GET_INDEX_SETUP_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      default:
        return state
  }
}

export default UserData
