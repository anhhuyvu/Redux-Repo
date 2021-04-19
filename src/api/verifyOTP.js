
export const VerifyOTP = (otp_1, otp_2, otp_3, otp_4) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const otp1 = '1';
      const otp2 = '3';
      const otp3 = '4';
      const otp4 = '5';
      const valid =
        otp_1 === otp1 && otp_2 === otp2 && otp_3 === otp3 && otp_4 === otp4;

      if (valid) {
        resolve({ data: "success" });
      } else {
        reject("Invalid OTP");
        alert("Invalid OTP");
      }
    }, 200);
  });
};
