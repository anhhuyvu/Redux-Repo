import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import top_icon from "../images/Uber.png";
import { Form, Formik, Field } from "formik";

import "./Signup.css";
import * as Yup from "yup";
import { number } from "yup/lib/locale";

import { Verify_OTP } from "../actions";
import { Verify_PhoneNumber } from "../actions";

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
import { VerifyOTP } from "../api/verifyOTP";

//const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Header = () => {
  return (
    <header className="Header">
      <div>
        <img src={top_icon}></img>
      </div>
      <div>
        <i className="fa fa-align-right"></i>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="foot">
      <div className="foot-content">
        <p>© 2019 Uber Technologies Inc. All Rights Reserved.</p>
        <p>Terms of Use | Legal Notices | Privacy & Security</p>
      </div>
      <div>
        <i className="fa fa-facebook-square" style={{ color: "bue" }}></i>
        <i className="fa fa-youtube" style={{ color: "crimson" }}></i>
        <i className="fa fa-linkedin" style={{ color: "darkcyan" }}></i>
      </div>
    </footer>
  );
};

const SignUpSchema = Yup.object().shape({
  mobileNumber: Yup.string().required("Please input your phone number"),
  agreement: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const SignUpForm = () => {
  return (
    <div className="form-content">
      <FormikStepper
        initialValues={{
          mobileNumber: "",
          agreement: false,
          otp1:'',
          otp2:'',
          otp3:'',
          otp4:'',
          fullname: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={() => {}}
      >
        {/* {({ errors, touched }) => ( */}
        <div className="form-1">
          <h1>Get moving with Uber</h1>
          <Field
            className="input"
            name="mobileNumber"
            placeholder="Enter your mobile number"
          />
          <label>
            <Field className="agreement" name="agreement" type="checkbox" />
            Agree Terms and Conditions
          </label>
        </div>
        <div className="form-2">
          <h3>
            Enter the 4 digit code sent to you at your phone
            <a href="/" style={{ fontSize: "15px" }}>
              Did you enter a correct number ?
            </a>
          </h3>

          <div className="input-otp">
            <Field className="otp" name="otp1"></Field>
            <Field className="otp" name="otp2"></Field>
            <Field className="otp" name="otp3"></Field>
            <Field className="otp" name="otp4"></Field>
          </div>
        </div>
        <div className="form-3">
          <h3 style={{ fontSize: "25px" }}>Enter your info</h3>
          <Field
            className="fullname"
            name="fullname"
            placeholder="Enter your full name"
          ></Field>
          <div>
            <p>Select gender</p>
            <button className="gender-button">
              <i className="fa fa-male" style={{ fontSize: "20px" }}></i>
            </button>
            <button className="gender-button">
              <i className="fa fa-female" style={{ fontSize: "20px" }}></i>
            </button>
          </div>
          <div className="profile-content">
            <button className="profile-button">
              <i className="fa fa-user-circle" style={{ fontSize: "30px" }}></i>
            </button>
            <p>Upload your profile picture</p>
          </div>
        </div>
      </FormikStepper>
    </div>
  );
};

const FormikStepper = ({ children, ...props }) => {
  const dispatch = useDispatch();
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        }
        if (step === 0) {
          dispatch(Verify_PhoneNumber(values.mobileNumber));
        }
        if (step === 1) {
          dispatch(Verify_OTP(values.otp1,values.otp2,values.otp3,values.otp4));
        }
        if (VERIFYPHONE_NUMBER_SUCCESS && VERIFY_OTP_SUCCESS) {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ errors, touched, values }) => (
        <Form autoComplete="off">
          {currentChild}
          <div className="Error">
            {errors.mobileNumber ? (
              <p className="Error_1">{errors.mobileNumber}</p>
            ) : null}
            {errors.agreement ? (
              <p className="Error_2">{errors.agreement}</p>
            ) : null}
          </div>
          <button className="submit-button" type="submit">
            {isLastStep() ? (
              "Submit"
            ) : (
              <i className="fa fa-arrow-right" style={{ fontSize: "20px" }}></i>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Body = () => {
  return (
    <>
      <Header />
      <div className="form">
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default Body;
