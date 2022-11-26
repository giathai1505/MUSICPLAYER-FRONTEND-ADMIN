import { Pagination, Table } from "antd";
import React, { useState } from "react";
import "./styles.scss";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { ConvertSecondToMinute } from "../../../assets/function/StringFuction";
import AddNewModal from "../AddNewModal";
import DeleteModal from "../DeleteModal";

const ListMusic = ({ musics, getAllAPI }) => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const [editField, setEditField] = useState();

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
      title: "#",
      dataIndex: "stt",
      key: "stt",
      className: "sttRow",
      render: (text, record, index) => <span>{++index}</span>,
    },
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
    },
    {
      title: "Time",
      dataIndex: "duration",
      key: "duration",
      render: (text, record, index) => (
        <span>{ConvertSecondToMinute(text)}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      className: "actionRow",

      render: (text, record, index) => (
        <div className="flex items-center gap-2">
          <BiEdit
            className="cursor-pointer hover:scale-150"
            onClick={() => handleEditClick(record)}
          />
          <BsTrash
            className="cursor-pointer hover:scale-150"
            onClick={() => handleDeleteMusic(record)}
          />
        </div>
      ),
    },
  ];

  const handleOnChangePage = (page) => {
    console.log();
  };

  const handleAddOk = () => {
    setIsShowEditModal(false);
  };

  const handleAddCancel = () => {
    setIsShowEditModal(false);
  };

  const handleDeleteSuccess = () => {
    setIsShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setIsShowDeleteModal(false);
  };

  return (
    <div>
      <div>search box</div>
      <Table columns={columns} dataSource={musics} pagination={false} />
      <div className="flex justify-end mt-3">
        <Pagination
          onChange={handleOnChangePage}
          total={musics.length}
          pageSize={2}
        />
      </div>
      <AddNewModal
        isShow={isShowEditModal}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
        editField={editField}
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

export default ListMusic;
