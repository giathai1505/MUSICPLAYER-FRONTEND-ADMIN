import { Button, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import UserActionModal from './userActionModal';
import axios from 'axios';

const UserManagement = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [listMusics, setListMusics] = useState([]);

  const getAllUserAPI = async () => {
    try {
      const result = await axios.get(
        'http://localhost:5000/api/user/admin/users'
      );

      if (result.data.users) {
        setListMusics(result.data.users);
      }
    } catch (error) {
      console.log('login error:', error.response);
    }
  };

  useEffect(() => {
    getAllUserAPI();
  }, []);

  const handleDeleteMusic = (record) => {
    console.log(record);
  };
  const columns = [
    {
      title: '#',
      dataIndex: 'stt',
      key: 'stt',
      className: 'sttRow',
      render: (text, record, index) => <span>{++index}</span>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'fullName',
      dataIndex: 'fulName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      className: 'actionRow',

      render: (text, record, index) => (
        <div className='flex items-center gap-2'>
          <BsTrash
            className='cursor-pointer hover:scale-150'
            onClick={() => handleDeleteMusic(record)}
          />
          <BiEdit
            className='cursor-pointer hover:scale-150'
            onClick={() => setIsShowEditModal(!isShowEditModal)}
          />
        </div>
      ),
    },
  ];

  const handleAddOk = () => {
    getAllUserAPI();
    setIsShowAddModal(false);
  };

  const handleAddCancel = () => {
    setIsShowAddModal(false);
  };

  const handleOpenAddModal = () => {
    setIsShowAddModal(true);
  };

  return (
    <div>
      <Button type='primary' size='large' onClick={handleOpenAddModal}>
        Add new
      </Button>
      <Table columns={columns} dataSource={listMusics} />
      <UserActionModal
        isShow={isShowAddModal}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      />
    </div>
  );
};

export default UserManagement;
