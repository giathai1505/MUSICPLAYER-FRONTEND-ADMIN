import { Modal } from 'antd';
import { Form, Formik } from 'formik';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as Yup from 'yup';

import axios from 'axios';
import { toast } from 'react-toastify';
import FormikControl from '../../../components/formikCustom/FormikControl.js';

const validationSchema = Yup.object({
  content: Yup.string().required('Enter content'),
});

const AddNewModal = ({ isShow, onOk, onCancel, editField }) => {
  const [initialValues, setInitialValues] = useState({
    content: '',
  });

  useEffect(() => {
    if (editField) {
      setInitialValues({
        content: editField.content,
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
        await axios.post('http://localhost:5000/api/question/update', {
          ...newValues,
          questionId: editField._id,
        });
        toast.success('Update question successfully!');
      } else {
        await axios.post(
          'http://localhost:5000/api/question/create',
          newValues
        );
        toast.success('Create question successfully!');
      }
      onOk();
    } catch (error) {
      toast.error('Err. Please try again!');
    }
  };

  const handleCloseForm = () => {
    setInitialValues({ content: '' });
    onCancel();
  };

  return (
    <Modal
      title={
        <div className='text-[20px] flex justify-center font-header'>
          {editField ? 'Edit Question' : 'Add Question'}
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
            placeholder='Enter question content'
            control='input'
            type='text'
            label='Content'
            name='content'
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
