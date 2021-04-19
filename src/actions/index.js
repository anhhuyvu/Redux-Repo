import { VerifyPhoneNumber } from "../api/verifyPhoneNumber";
import { VerifyOTP } from "../api/verifyOTP";

export const VERIFYPHONE_NUMBER_START = "VERIFYPHONE_NUMBER_START";
export const VERIFYPHONE_NUMBER_SUCCESS = "VERIFYPHONE_NUMBER_SUCCESS";
export const VERIFYPHONE_NUMBER_FAIL = "VERIFYPHONE_NUMBER_START";

export const VERIFY_OTP_START = "VERIFY_OTP_START";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_FAIL = "VERIFY_OTP_FAIL";

export function Verify_PhoneNumber(phoneNumber) {
  return (dispatch) => {
    dispatch({ type: VERIFYPHONE_NUMBER_START });
    VerifyPhoneNumber(phoneNumber)
      .then((val) => {
        dispatch({ type: VERIFYPHONE_NUMBER_SUCCESS, phoneNumber: val });
      })
      .catch((err) => {
        dispatch({ type: VERIFYPHONE_NUMBER_FAIL, error: err });
      });
  };
}

export function Verify_OTP(otp) {
  return (dispatch) => {
    dispatch({ type: VERIFY_OTP_START });
    VerifyOTP(otp)
      .then((val) => {
        dispatch({ type: VERIFY_OTP_SUCCESS, otp: val });
      })
      .catch((err) => {
        dispatch({ type: VERIFY_OTP_FAIL, error: err });
      });
  };
}
