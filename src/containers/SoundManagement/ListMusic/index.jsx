import { Button, Pagination, Table } from "antd";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import { BiEdit, BiSearchAlt2 } from "react-icons/bi";
import { ConvertSecondToMinute } from "../../../assets/function/StringFuction";
import AddNewModal from "../AddNewModal";
import DeleteModal from "../DeleteModal";
import axios from "axios";

const ListMusic = ({ type }) => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [editField, setEditField] = useState();
  const [listMusics, setListMusics] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(0);

  const getAllMusicsAPI = async (type) => {
    try {
      if (type === "MUSIC") {
        const result = await axios.post(
          "http://localhost:5000/api/sound/musics-admin",
          {
            name: searchInput,
          }
        );

        setListMusics(result.data.musics);
      } else if (type === "SOUND") {
        const result = await axios.post(
          "http://localhost:5000/api/sound/sounds",
          {
            name: searchInput,
          }
        );
        setListMusics(result.data.sounds);
      }
    } catch (error) {
      console.log("login error:");
    }
  };

  useEffect(() => {
    getAllMusicsAPI(type);
  }, [type, searchInput]);

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

  const handleEditOk = () => {
    getAllMusicsAPI(type);
    setIsShowEditModal(false);
  };

  const handleEditCancel = () => {
    setIsShowEditModal(false);
  };

  const handleDeleteSuccess = () => {
    getAllMusicsAPI(type);
    setIsShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setIsShowDeleteModal(false);
  };

  const handleAddOk = () => {
    getAllMusicsAPI(type);
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
      <div className="flex justify-between">
        <div className="flex gap-1 items-center w-[500px] bg-[#413158] px-2 rounded py-1">
          <BiSearchAlt2 className="text-[24px] text-white" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search...."
            className="bg-transparent outline-none border-0 text-white"
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="primary"
            className="bg-white text-primary flex items-center gap-2"
            size="large"
            onClick={handleOpenAddModal}
          >
            <BsPlusLg />
            Add new
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={listMusics ? listMusics : []} />

      <AddNewModal
        isShow={isShowEditModal}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
        editField={editField}
        type={type}
      />
      <AddNewModal
        isShow={isShowAddModal}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
        type={type}
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
