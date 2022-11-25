import { Button, Modal } from 'antd';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../../../components/formikCustom/FormikControl.js';
import useImageUpload from '../../../hooks/useUpLoadFile.js';
import { GiSoundOn } from 'react-icons/gi';
import { AiOutlineFileImage } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';

let initialValues = {
  name: '',
  artist: '',
  description: '',
  file: '',
  image: '',
  type: 'MUSIC',
  emotion: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Enter your name'),
  artist: Yup.string().required('Enter your name'),
  description: Yup.string().required('Enter your description'),
  // file: Yup.string().required("Enter your file"),
  // image: Yup.string().required("Enter your image"),
  type: Yup.string().required('Enter your type'),
  emotion: Yup.string().required('Enter your emotion'),
});

const UserActionModal = ({ isShow, onOk, onCancel }) => {
  const [imageSelected, setImageSelected] = useState();
  const [audioSelected, setAudioSelected] = useState();
  const [listEmotions, setListEmotions] = useState([]);
  const imageUpload = useImageUpload();

  const getEmotionsAPI = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/emotion');
      if (result.data.emotions) {
        let newListEmotions = result.data.emotions.map((item, index) => {
          return {
            key: item._id,
            value: item.name,
          };
        });
        setListEmotions(newListEmotions);
      }
    } catch (error) {
      console.log('login error:', error);
    }
  };

  useEffect(() => {
    getEmotionsAPI();
  }, []);

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const newValues = {
        ...values,
        file: audioSelected.url,
        image: imageSelected,
        duration: audioSelected.duration,
      };

      const result = await axios.post(
        'http://localhost:5000/api/sound/create',
        newValues
      );
      onOk();
      toast.success('Create music successfully!');
    } catch (error) {
      console.log('login error:', error);
      toast.error('Create music successfully!');
    }
  };

  const handleOnchangeFile = (e) => {
    Array.from(e.target.files).forEach(async (file) => {
      if (file.size <= 52428800) {
        const data = await imageUpload(file);

        setAudioSelected({ url: data.url, duration: data.duration });
      } else {
        alert('Kích thước của file quá lớn!!');
      }
    });
  };

  const handleOnChangeImage = (e) => {
    Array.from(e.target.files).forEach(async (file) => {
      if (file.size <= 52428800) {
        const data = await imageUpload(file);
        setImageSelected(data.url);
      } else {
        alert('Kích thước của file quá lớn!!');
      }
    });
  };

  return (
    <Modal
      title='Add music'
      open={isShow}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormikControl
            placeholder='Enter music name...'
            control='input'
            type='text'
            label='Name'
            name='name'
          />
          <FormikControl
            placeholder='Enter artist name...'
            control='input'
            type='text'
            label='Artist'
            name='artist'
          />
          <div className=''>
            <FormikControl
              control='input'
              type='file'
              id='audio'
              label='File'
              onChange={handleOnchangeFile}
              value=''
              name='file'
              hidden
            />

            <label htmlFor='audio' className='cursor-pointer'>
              <div className='flex items-center gap-1 bg-primary text-white px-2 cursor-pointer py-1 rounded-lg w-fit'>
                <GiSoundOn />
                <span>Add Sound</span>
              </div>
            </label>

            {audioSelected ? (
              <audio controls='controls'>
                <source src={audioSelected.url} type='audio/mpeg' />
              </audio>
            ) : null}
            <FormikControl
              control='input'
              type='file'
              value=''
              onChange={handleOnChangeImage}
              label='Image'
              name='image'
              hidden
            />
            <label htmlFor='image' className='cursor-pointer'>
              <div className='flex items-center gap-1 bg-primary text-white px-2 cursor-pointer py-1 rounded-lg w-fit'>
                <AiOutlineFileImage />
                <span>Add image</span>
              </div>
            </label>
            {imageSelected ? (
              <img src={imageSelected} alt='' className='w-[200px] rounded' />
            ) : null}
          </div>
          <FormikControl
            placeholder='Enter description'
            control='textarea'
            label='Description'
            name='description'
          />

          <FormikControl
            control='select'
            label='Emotion'
            name='emotion'
            options={listEmotions}
          />
          <div className='flex gap-2 items-center justify-end mr-5'>
            <span
              className='bg-white border border-solid border-black text-black cursor-pointer rounded select-none px-4 py-2'
              onClick={onCancel}
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

export default UserActionModal;
