import { Button, Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import AddNewModal from "./AddNewModal";
import DeleteModal from "./DeleteModal";
import ListMusic from "./ListMusic";

const SoundManagement = () => {
  const [listMusic, setListMusic] = useState([]);
  const [listSound, setListSound] = useState([]);
  const [isShowAddModal, setIsShowAddModal] = useState(false);

  //call api to get list music when initial

  const getAllMusicsAPI = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/sound");

      if (result.data.sounds) {
        console.log(result.data.sounds);
        setListMusic(
          result.data.sounds.filter((item) => item.type === "MUSIC")
        );
        setListSound(
          result.data.sounds.filter((item) => item.type === "SOUND")
        );
      }
    } catch (error) {
      console.log("login error:", error);
    }
  };
  useEffect(() => {
    getAllMusicsAPI();
  }, []);

  const handleDeleteOk = () => {
    getAllMusicsAPI();
  };

  const items = [
    {
      label: <span className="font-semibold">List Sound</span>,
      key: "item-1",
      children: (
        <ListMusic
          musics={listSound.length >= 0 ? listSound : []}
          getAllAPI={handleDeleteOk}
        />
      ),
    },
    {
      label: <span className="font-semibold">List Music</span>,
      key: "item-2",
      children: (
        <ListMusic
          musics={listMusic.length >= 0 ? listMusic : []}
          getAllAPI={handleDeleteOk}
        />
      ),
    },
  ];

  //action with add modal
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
      <Tabs type="card" items={items} />
      <AddNewModal
        isShow={isShowAddModal}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      />
    </div>
  );
};

export default SoundManagement;
