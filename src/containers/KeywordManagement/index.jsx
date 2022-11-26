import { Button, Pagination, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import { BsPlusLg, BsTrash } from 'react-icons/bs';
import { BiEdit, BiSearchAlt2 } from 'react-icons/bi';
import AddNewModal from './AddNewModal';
import DeleteModal from './DeleteModal';
import axios from 'axios';

const KeywordManagement = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [editField, setEditField] = useState();
  const [listKeywords, setListKeywords] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(0);

  const getAllEmotionsAPI = async () => {
    try {
      const result = await axios.post('http://localhost:5000/api/emotion', {
        name: searchInput,
      });
      setListKeywords(result.data.emotions);
    } catch (error) {
      console.log('error:');
    }
  };

  useEffect(() => {
    getAllEmotionsAPI();
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      className: 'actionRow',

      render: (text, record, index) => (
        <div className='flex items-center gap-2'>
          <BiEdit
            className='cursor-pointer hover:scale-150'
            onClick={() => handleEditClick(record)}
          />
          <BsTrash
            className='cursor-pointer hover:scale-150'
            onClick={() => handleDeleteMusic(record)}
          />
        </div>
      ),
    },
  ];

  const handleEditOk = () => {
    getAllEmotionsAPI();
    setIsShowEditModal(false);
  };

  const handleEditCancel = () => {
    setIsShowEditModal(false);
  };

  const handleDeleteSuccess = () => {
    getAllEmotionsAPI();
    setIsShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setIsShowDeleteModal(false);
  };

  const handleAddOk = () => {
    getAllEmotionsAPI();
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
        <div className='flex justify-end'>
          <Button
            type='primary'
            className='bg-white text-primary flex items-center gap-2'
            size='large'
            onClick={handleOpenAddModal}
          >
            <BsPlusLg />
            Add new
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={listKeywords ? listKeywords : []} />

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

export default KeywordManagement;
