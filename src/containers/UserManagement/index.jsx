import { Button, Pagination, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import { BsPlusLg, BsTrash } from 'react-icons/bs';
import { BiEdit, BiSearchAlt2 } from 'react-icons/bi';
import AddNewModal from './AddNewModal';
import DeleteModal from './DeleteModal';
import axios from 'axios';

const UserManagement = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [editField, setEditField] = useState();
  const [listUsers, setListUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(0);

  const getAllUsersAPI = async (type) => {
    try {
      const result = await axios.post(
        'http://localhost:5000/api/user/admin/users',
        {
          username: searchInput,
        }
      );
      setListUsers(result.data.users);
    } catch (error) {
      console.log('login error:');
    }
  };

  useEffect(() => {
    getAllUsersAPI();
  }, [searchInput]);

  const handleDeleteMusic = (record) => {
    setEditField(record);
    setIsShowDeleteModal(true);
  };

  const handleEditClick = (record) => {
    setEditField(record);
    setIsShowEditModal(true);
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
      title: 'Full name',
      dataIndex: 'fullName',
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
        </div>
      ),
    },
  ];

  const handleEditOk = () => {
    getAllUsersAPI();
    setIsShowEditModal(false);
  };

  const handleEditCancel = () => {
    setIsShowEditModal(false);
  };

  const handleDeleteSuccess = () => {
    getAllUsersAPI();
    setIsShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setIsShowDeleteModal(false);
  };

  const handleAddOk = () => {
    getAllUsersAPI();
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
      <div className='flex justify-between'>
        <div className='flex gap-1 items-center w-[500px] bg-[#413158] px-2 rounded py-1'>
          <BiSearchAlt2 className='text-[24px] text-white' />
          <input
            type='text'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder='Search....'
            className='bg-transparent outline-none border-0 text-white'
          />
        </div>
      </div>
      <Table columns={columns} dataSource={listUsers ? listUsers : []} />

      <AddNewModal
        isShow={isShowEditModal}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        editField={editField}
      />
      <AddNewModal
        isShow={isShowAddModal}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      />
      <DeleteModal
        isShow={isShowDeleteModal}
        item={editField}
        onCancel={handleCancelDelete}
        onSuccess={handleDeleteSuccess}
      />
    </div>
  );
};

export default UserManagement;
