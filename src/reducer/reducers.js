import { VerifyOTP } from "../api/verifyOTP";

import {
  VERIFYPHONE_NUMBER_FAIL,
  VERIFYPHONE_NUMBER_START,
  VERIFYPHONE_NUMBER_SUCCESS,
} from "../actions";

import {
  VERIFY_OTP_FAIL,
  VERIFY_OTP_START,
  VERIFY_OTP_SUCCESS,
} from "../actions";

const initialState = {
  mobileNumber: "",
  otp: [],
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFYPHONE_NUMBER_START:
      return {
        ...state,
        error: "",
      };
    case VERIFYPHONE_NUMBER_SUCCESS:
      return {
        ...state,
        mobileNumber: action.phoneNumber,
      };
    case VERIFYPHONE_NUMBER_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case VERIFY_OTP_START:
      return {
        ...state,
        error: "",
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        otp: action.otp,
      };
    case VERIFY_OTP_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default rootReducer;
