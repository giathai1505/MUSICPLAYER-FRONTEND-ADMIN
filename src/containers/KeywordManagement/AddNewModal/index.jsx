import { Modal } from 'antd';
import { Form, Formik } from 'formik';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as Yup from 'yup';

import axios from 'axios';
import { toast } from 'react-toastify';
import FormikControl from '../../../components/formikCustom/FormikControl.js';

const validationSchema = Yup.object({
  name: Yup.string().required('Enter username'),
});

const AddNewModal = ({ isShow, onOk, onCancel, editField }) => {
  const [initialValues, setInitialValues] = useState({
    name: '',
  });

  useLayoutEffect(() => {
    if (editField) {
      setInitialValues({
        name: editField.name,
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
        await axios.post('http://localhost:5000/api/emotion/update', {
          ...newValues,
          emotionId: editField._id,
        });
        toast.success('Update keyword successfully!');
      } else {
        await axios.post('http://localhost:5000/api/emotion/create', newValues);
        toast.success('Create keyword successfully!');
      }
      onOk();
    } catch (error) {
      toast.error('Err. Please try again!');
    }
  };

  const handleCloseForm = () => {
    onCancel();
  };

  return (
    <Modal
      title={
        <div className='text-[20px] flex justify-center font-header'>
          {editField ? 'Edit Keyword' : 'Add Keyword'}
        </div>
      }
      className='w-[800px]'
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
            placeholder='Enter emotion name'
            control='input'
            type='text'
            label='Name'
            name='name'
          />
          <div className='flex gap-2 items-center justify-end mr-5'>
            <span
              className='bg-white border border-solid border-black text-black cursor-pointer rounded select-none px-4 py-2'
              onClick={handleCloseForm}
            >
              Cancel
            </span>
            <button
              type='submit'
              className='bg-primary text-white rounded px-4 py-2'
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
