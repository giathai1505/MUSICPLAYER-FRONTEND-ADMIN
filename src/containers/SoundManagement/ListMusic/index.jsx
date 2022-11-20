import { Button, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import AddNewModal from "./AddNewModal";
import axios from "axios";

const ListMusic = () => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [listMusics, setListMusics] = useState([]);

  const getAllMusicsAPI = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/sound");

      if (result.data.sounds) {
        setListMusics(result.data.sounds);
      }
    } catch (error) {
      console.log("login error:", error);
    }
  };

  useEffect(() => {
    getAllMusicsAPI();
  }, []);

  const handleDeleteMusic = (record) => {
    console.log(record);
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
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      className: "actionRow",

      render: (text, record, index) => (
        <div className="flex items-center gap-2">
          <BsTrash
            className="cursor-pointer hover:scale-150"
            onClick={() => handleDeleteMusic(record)}
          />
          <BiEdit
            className="cursor-pointer hover:scale-150"
            onClick={() => setIsShowEditModal(!isShowEditModal)}
          />
        </div>
      ),
    },
  ];

  const handleAddOk = () => {
    getAllMusicsAPI();
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
      <Button type="primary" size="large" onClick={handleOpenAddModal}>
        Add new
      </Button>
      <Table columns={columns} dataSource={listMusics} />
      <AddNewModal
        isShow={isShowAddModal}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      />
    </div>
  );
};

export default ListMusic;
