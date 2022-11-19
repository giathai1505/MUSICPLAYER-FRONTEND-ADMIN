import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faMusic } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
export default function Sidebar() {
  return (
    <section className={cx("sidebar")}>
      <div className={cx("logo")}>
        <img
          src={require("./../../assets/images/Logo-Offical-gadient.png")}
          alt="logo"
        ></img>
        <p>Melody for emotion</p>
      </div>
      <div className={cx("inner")}>
        <ul className={cx("list")}>
          <li className={cx("item")}>
            <Link className={cx("link")} to="/">
              <FontAwesomeIcon
                icon={faMusic}
                className={cx("icon")}
              ></FontAwesomeIcon>
              <p className={cx("text")}>Music</p>
            </Link>
          </li>
          <li className={cx("item")}>
            <Link className={cx("link")} to="/Sound">
              <FontAwesomeIcon
                icon={faLeaf}
                className={cx("icon")}
              ></FontAwesomeIcon>
              <p className={cx("text")}>Sound</p>
            </Link>
          </li>
          <li className={cx("item")}>
            <Link className={cx("link")} to="/favorite">
              <FontAwesomeIcon
                icon={faHeart}
                className={cx("icon")}
              ></FontAwesomeIcon>
              <p>Favorite</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
