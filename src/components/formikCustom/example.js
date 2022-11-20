import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../formikCustom/form.css";
import FormikControl from "./FormikControl";


const initialValues = {
  email: "",
  description: "",
  selectOption: "",
  radioOption: "",
  checkboxOption: [],
  Birthate: null,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Bạn cần phải nhập trường này !")
    .email("Định dạng email chưa đúng !"),
  description: Yup.string().required("Bạn cần phải nhập trường này !"),
  selectOption: Yup.string().required("Bạn cần phải nhập trường này !"),
  radioOption: Yup.string().required("Bạn cần phải nhập trường này !"),
  checkboxOption: Yup.array().required("Bạn cần phải nhập trường này !"),
  Birthate: Yup.date().required("Bạn cần phải nhập trường này !").nullable,
});

const onSubmit = (values) => console.log("Form data ", values);

const Example = () => {
  const dropdownOptions = [
    { key: "", value: "Selec an option" },
    { key: "option1", value: "Option 1" },
    { key: "option2", value: "Option 2" },
    { key: "option3", value: "Option 3" },
  ];

  const radioOptions = [
    { key: "option1", value: "Option 1" },
    { key: "option2", value: "Option 2" },
    { key: "option3", value: "Option 3" },
  ];

  const checkboxOptions = [
    { key: "option1", value: "Option 1" },
    { key: "option2", value: "Option 2" },
    { key: "option3", value: "Option 3" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="description"
              name="description"
            />

            <FormikControl
              control="select"
              label="Giới tính"
              name="selectOption"
              options={dropdownOptions}
            />

            <FormikControl
              control="radio"
              label="Radio Test"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox Test"
              name="checkboxOption"
              options={checkboxOptions}
            />
            
            <FormikControl
              control="datetime"
              label="Chọn ngày sinh"
              name="BirthDay"            
            />

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Example;
