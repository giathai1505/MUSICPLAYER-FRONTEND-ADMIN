import { Modal } from 'antd';
import { Form, Formik } from 'formik';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as Yup from 'yup';

import { GiSoundOn } from 'react-icons/gi';
import { AiOutlineFileImage } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import FormikControl from '../../../components/formikCustom/FormikControl.js';
import useImageUpload from '../../../hooks/useUpLoadFile.js';

const radioOptions = [
  { key: 'MUSIC', value: 'MUSIC' },
  { key: 'SOUND', value: 'SOUND' },
];

const validationSchema = Yup.object({
  name: Yup.string().required('Enter your name'),
  artist: Yup.string().required('Enter your name'),
  description: Yup.string().required('Enter your description'),
  type: Yup.string().required('Enter type'),
  type: Yup.string().required('Enter your type'),
  emotion: Yup.string().required('Enter your emotion'),
});

const AddNewModal = ({ isShow, onOk, onCancel, editField }) => {
  const imageUpload = useImageUpload();
  const [imageSelected, setImageSelected] = useState();
  const [audioSelected, setAudioSelected] = useState();
  const [listEmotions, setListEmotions] = useState([]);
  const [initialValues, setInitialValues] = useState({
    name: '',
    artist: '',
    description: '',
    file: '',
    image: '',
    type: '',
    emotion: '',
  });

  useLayoutEffect(() => {
    if (editField) {
      setInitialValues({
        name: editField.name,
        artist: editField.artist,
        description: editField.description,
        file: '',
        image: '',
        type: editField.type,
        emotion: editField.emotion,
      });
      setImageSelected(editField.image);
      setAudioSelected({ url: editField.file, duration: editField.duration });
    }
  }, [editField]);

  const getEmotionsAPI = async () => {
    try {
      const result = await axios.post('http://localhost:5000/api/emotion');
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
    const newValues = {
      ...values,
      file: audioSelected.url,
      image: imageSelected,
      duration: audioSelected.duration,
    };
    try {
      if (editField) {
        //handle edit audio
        await axios.post('http://localhost:5000/api/sound/update', {
          ...newValues,
          soundId: editField._id,
        });
        toast.success('Update music successfully!');
      } else {
        console.log(newValues);
        //handle add audio
        await axios.post('http://localhost:5000/api/sound/create', newValues);
        toast.success('Create music successfully!');
      }
      onOk();
    } catch (error) {
      toast.error('Err. Please try again!');
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
        alert('Size of this file is so big!!');
      }
    });
  };

  const handleCloseForm = () => {
    setAudioSelected(undefined);
    setImageSelected(undefined);
    onCancel();
  };

  return (
    <Modal
      title={
        <div className='text-[20px] flex justify-center font-header'>
          {editField ? 'Edit Sound' : 'Add Sound'}
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
            placeholder='Enter music name'
            control='input'
            type='text'
            label='Name'
            name='name'
          />
          <FormikControl
            placeholder='Enter artist name'
            control='input'
            type='text'
            label='Artist'
            name='artist'
          />
          <FormikControl
            control='radio'
            label='Type'
            name='type'
            options={radioOptions}
          />
          <div className=''>
            {editField ? null : (
              <>
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
                    <span>Add Audio</span>
                  </div>
                </label>

                {audioSelected ? (
                  <audio controls='controls'>
                    <source src={audioSelected.url} type='audio/mpeg' />
                  </audio>
                ) : null}
              </>
            )}

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
          <br />
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
