import { Tabs } from "antd";
import React from "react";
import ListMusic from "./ListMusic";
import ListSound from "./ListSound";

const SoundManagement = () => {
  const items = [
    {
      label: <span className="font-semibold">List Sound</span>,
      key: "item-1",
      children: <ListSound />,
    }, // remember to pass the key prop
    {
      label: <span className="font-semibold">List Music</span>,
      key: "item-2",
      children: <ListMusic />,
    },
  ];
  return <Tabs type="card" items={items} />;
};

export default SoundManagement;
