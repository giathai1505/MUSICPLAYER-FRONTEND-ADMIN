import { Modal } from "antd";
import { Form, Formik } from "formik";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as Yup from "yup";

import axios from "axios";
import { toast } from "react-toastify";
import FormikControl from "../../../components/formikCustom/FormikControl.js";

const validationSchema = Yup.object({
  username: Yup.string().required("Please enter username"),
  fullName: Yup.string().required("Please enter fullName"),
  email: Yup.string().required("Please enter email"),
});

const AddNewModal = ({ isShow, onOk, onCancel, editField }) => {
  const [initialValues, setInitialValues] = useState({
    username: "",
    fullName: "",
    email: "",
  });

  useLayoutEffect(() => {
    if (editField) {
      setInitialValues({
        username: editField.username,
        fullName: editField.fullName,
        email: editField.email,
      });
    }
  }, [editField]);

  const handleSubmit = async (values) => {
    const newValues = {
      ...values,
    };
    try {
      if (editField) {
        //handle edit audio
        const result = await axios.post(
          "http://localhost:5000/api/user/update",
          {
            ...newValues,
            userId: editField._id,
          }
        );

        if (result.data.success) {
          toast.success("Update user successfully!");
        } else {
          toast.error(result.data.message);
        }
      } else {
        console.log(newValues);
      }
      onOk();
    } catch (error) {
      toast.error("Err. Please try again!");
    }
  };

  const handleCloseForm = () => {
    onCancel();
  };

  return (
    <Modal
      title={
        <div className="text-[20px] flex justify-center font-header">
          {editField ? "Edit User" : "Add User"}
        </div>
      }
      className="w-[800px]"
      open={isShow}
      onOk={onOk}
      onCancel={handleCloseForm}
      footer={null}
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormikControl
            placeholder="Enter username"
            control="input"
            type="text"
            label="Username"
            name="username"
          />
          <FormikControl
            placeholder="Enter full name"
            control="input"
            type="text"
            label="Full name"
            name="fullName"
          />
          <FormikControl
            placeholder="Enter email"
            control="input"
            type="text"
            label="Email"
            name="email"
          />
          <div className="flex gap-2 items-center justify-end mr-5">
            <span
              className="bg-white border border-solid border-black text-black cursor-pointer rounded select-none px-4 py-2"
              onClick={handleCloseForm}
            >
              Cancel
            </span>
            <button
              type="submit"
              className="bg-primary text-white rounded px-4 py-2"
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddNewModal;
