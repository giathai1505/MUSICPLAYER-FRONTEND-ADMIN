import { Button, Modal } from 'antd';
import axios from 'axios';
import React from 'react';
import { AiFillWarning } from 'react-icons/ai';
import { toast } from 'react-toastify';

const DeleteModal = ({ item, isShow, onCancel, onSuccess }) => {
  const handleDeleteMusic = async () => {
    console.log(item._id);
    try {
      await axios.post('http://localhost:5000/api/emotion/delete', {
        emotionId: item._id,
      });
      toast.success('Delete keyword successfully !');
      onSuccess();
    } catch (error) {
      toast.error('Err. Please try again !');
    }
  };
  return (
    <Modal
      title={''}
      open={isShow}
      onOk={handleDeleteMusic}
      onCancel={onCancel}
      footer={null}
    >
      <div>
        <div className='flex justify-center items-center flex-col'>
          <AiFillWarning className='text-[#ff0000] text-[80px]' />
          <span className='font-header text-[20px]'>Are you sure?</span>
        </div>

        <div className='flex items-center justify-center h-20'>
          Do you want to delete&nbsp;"
          <span className='font-semibold'>{item && item.name}</span>" ?
        </div>
        <div className='flex justify-end items-center gap-3'>
          <Button onClick={onCancel}>No</Button>
          <Button className='bg-primary text-white' onClick={handleDeleteMusic}>
            Yes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
