import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Favorite.module.scss";
import { Space, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faHeart as heartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartregular } from "@fortawesome/free-regular-svg-icons";
import "./antdCusomize.scss";
const cx = classNames.bind(styles);
export default function Home() {
  const [iconChange, setIconChange] = useState(heartregular);
  const handleFavorite = (e) => {
    if (iconChange === heartSolid) {
      setIconChange(heartregular);
    }
    if (iconChange === heartregular) {
      setIconChange(heartSolid);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",

      render: (text, record, index) => (
        <Space size="middle">
          <div className={cx("")}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx("icon")}
            ></FontAwesomeIcon>
          </div>
          <div className={cx("")}>
            <FontAwesomeIcon
              icon={iconChange}
              className={cx("icon-heart")}
              onClick={handleFavorite}
            ></FontAwesomeIcon>
          </div>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      title: "The sound of a stream flowing",
      artist: "Relaxing River Sounds",
      time: "3:00",
    },
    {
      key: "2",
      title: "The sound of a stream flowing",
      artist: "Hihi",
      time: "3:15",
    },
    {
      key: "4",
      title: "The sound of a stream flowing",
      artist: "Relaxing River Sounds",
      time: "3:00",
    },
    {
      key: "5",
      title: "The sound of a stream flowing",
      artist: "Hihi",
      time: "3:15",
    },
  ];

  return (
    <div className={cx("home-container")}>
      {/* <Modal></Modal> */}
      <h1 className={cx("title")}>Favorite</h1>
      <div className={cx("content")}>
        <Table columns={columns} dataSource={data} className={cx("table")} />
      </div>
    </div>
  );
}
