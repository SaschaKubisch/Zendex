import { call, put, takeEvery } from "redux-saga/effects"

// Ecommerce Redux States
import {
  GET_INDEX_SETUP
} from "./actionTypes"

import {
  getIndexSetupFail,
  getIndexSetupSuccess,
} from "./actions"

//Include Both Helper File with needed methods
import {
  getIndexSetup
} from "helpers/fakebackend_helper"



function* userDataSaga() {
  yield takeEvery(GET_INDEX_SETUP, fetchIndexSetup)
}

export default userDataSaga
