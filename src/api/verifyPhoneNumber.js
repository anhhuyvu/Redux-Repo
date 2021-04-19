
export const VerifyPhoneNumber = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const onlyNumber = /^\d+$/;
      const valid =
        phoneNumber.match(onlyNumber) &&
        phoneNumber.length >= 9 &&
        phoneNumber.length <= 10;
      if (valid) {
        resolve({ data: phoneNumber });
        alert(`Your OTP for your ${phoneNumber} is: 1345`);
      } else {
        reject("Invalid phone number");
        alert("Invalid phone number");
      }
    },200);
  });
};
