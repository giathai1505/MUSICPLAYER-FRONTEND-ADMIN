import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

let initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Enter your username"),
  email: Yup.string().required("Enter your email"),
  password: Yup.string().required("Enter your password"),
  confirmPassword: Yup.string().required("Enter your password"),
  // .matches(
  //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  // ),
});

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/auth/register",
        values
      );

      localStorage.setItem(
        "accessToken",
        JSON.stringify(result.data.accessToken)
      );
      toast.success("Login Successfully!");
      navigate("/");
    } catch (error) {
      console.log("login error:", error);
    }
  };

  return (
    <>
      <div className={cx("login")}>
        <div className={cx("main")}>
          <div className="p-5 flex items-center flex-col">
            <div className="flex items-center flex-col">
              <div className={cx("logo")}>
                <img
                  src={require("./../../assets/images/Logo-Offical-gadient.png")}
                  alt="logo"
                />
              </div>
              <h3 className="text-md mb-4 text-white">Melody For Emotion</h3>
              <p className="text-[30px] font-normal text-white font-header mb-4">
                Register
              </p>
            </div>
            <div className="w-[400px]">
              <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="flex flex-col gap-3">
                      <Field
                        className="rounded-full px-3 py-2 bg-transparent border border-solid border-white text-white"
                        name="username"
                        placeholder="Gia Thai"
                      />
                      {errors.username && touched.username ? (
                        <div className="text-[#f23030]">{errors.username}</div>
                      ) : null}
                      <Field
                        className="rounded-full px-3 py-2 bg-transparent border border-solid border-white text-white"
                        name="email"
                        placeholder="giathai1505@gmail.com"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-[#f23030]">{errors.email}</div>
                      ) : null}
                      <Field
                        className="rounded-full px-3 py-2 bg-transparent border border-solid border-white text-white"
                        name="password"
                        placeholder="*******"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-[#f23030]">{errors.password}</div>
                      ) : null}
                      <Field
                        className="rounded-full px-3 py-2 bg-transparent border border-solid border-white text-white"
                        name="confirmPassword"
                        placeholder="*******"
                      />
                      {errors.confirmPassword && touched.confirmPassword ? (
                        <div className="text-[#f23030]">
                          {errors.confirmPassword}
                        </div>
                      ) : null}
                      <button
                        type="submit"
                        className="px-[50px] py-[10px] rounded-full bg-primary text-white"
                      >
                        Register
                      </button>
                      <div className="flex justify-end mt-3">
                        <Link
                          to="/forgotPassword"
                          className="text-lg text-primary"
                          type="submit"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="text-lg flex mt-3 flex-col justify-center items-center gap-3 text-white">
              <p>Or continue with</p>
              <button>
                <img
                  src={require("./../../assets/images/flat-color-icons_google.png")}
                  alt=""
                />
              </button>
              <p className="">
                Don't have an account yet?
                <NavLink to="/login" className="text-primary">
                  &nbsp;Login to your account
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
