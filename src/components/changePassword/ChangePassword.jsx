import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./ChangePassword.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const cx = classNames.bind(styles);

export default function Login() {
  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState(false);
  const navigate = useNavigate();

  const {
    values,
    isValid,
    dirty,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Please enter your password")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,25}$/,
          "Password must have at least 8 characters and contain at least one letter, one number and a special character"
        ),
      confirmPassword: Yup.string()
        .required("Please enter your confirm password!")
        .oneOf([Yup.ref("password"), null], "password must match"),
    }),
    onSubmit: (value) => {
      navigate("/login");
    },
  });

  return (
    <>
      <div className={cx("login")}>
        <div className={cx("main")}>
          {/* New password */}
          <form className={cx("newPassword-form")} onSubmit={handleSubmit}>
            <div className={cx("logo")}>
              <img
                src={require("./../../assets/images/Logo-Offical-gadient.png")}
                alt="logo"
              />
            </div>
            <h3 className="text-md mb-4 text-white">Melody For Emotion</h3>
            <p className={cx("text")}>Forgot Password</p>
            <div className={cx("form")}>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="new password"
                className={cx(
                  `${
                    errors.password && touched.password
                      ? "input-errors"
                      : "form-input"
                  }`
                )}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <div className={cx("errorMsg")}>{errors.password}</div>
              ) : null}
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm new password"
                className={cx(
                  `${
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-errors"
                      : "form-input"
                  }`
                )}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className={cx("errorMsg")}>{errors.confirmPassword}</div>
              ) : null}

              <div className={cx("action")}>
                <button className={cx("btn_change-Password")}>
                  Change Password
                </button>
              </div>
            </div>
            <div className={cx("social")}>
              <p className={cx("question")}>
                or back to <Link to="/login">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
