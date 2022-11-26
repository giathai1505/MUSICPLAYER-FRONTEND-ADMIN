import { Button, Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import AddNewModal from "./AddNewModal";
import DeleteModal from "./DeleteModal";
import ListMusic from "./ListMusic";

const SoundManagement = () => {
  const items = [
    {
      label: <span className="font-semibold">List Sound</span>,
      key: "item-1",
      children: <ListMusic type="SOUND" />,
    },
    {
      label: <span className="font-semibold">List Music</span>,
      key: "item-2",
      children: <ListMusic type="MUSIC" />,
    },
  ];

  return <Tabs type="card" items={items} />;
};

export default SoundManagement;
