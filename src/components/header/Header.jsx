import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function Header() {
  const [isLogin, setIsLogin] = useState();

 
  const handleCloseInput = (e) => {
    const iconClose = document.querySelector(`.${cx("icon-close")}`);
    const inputText = document.querySelector(`.${cx("input-search")}`);

    inputText.value = "";
    iconClose.classList.remove(`${cx("active")}`);
  };
  return (
    <>
      <header className={cx("header")}>
        <Search></Search>
        <div className={cx("header-app-list")}>
          <Link className={cx("timer")} to="/timer">
            <img
              src={require("./../../assets/images/icons8-clock 1.png")}
              alt=""
              className={cx("lock")}
            />
          </Link>
          {isLogin ? (
            <div className={cx("authen")}>
              <Link to="/login" className={cx("btn-login")}>
                Login
              </Link>
            </div>
          ) : (
            <div className={cx("authen")}>
              <div className={cx("user")}>
                <div className={cx("avatar")}>
                  <img
                    src={require("./../../assets/images/Avatar-am-nhac.jpg")}
                    alt=""
                    className={cx("lock")}
                  />
                </div>
                <p className={cx("name")}>hongnhung</p>
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </div>
              <div className={cx("menu-user")}>
                <ul className={cx("menu-user-list")}>
                  <li className={cx("menu-user-item")}>
                    <Link to="/profile" className={cx("menu-user-link")}>
                      Xem hồ sơ
                    </Link>
                  </li>
                  <li className={cx("menu-user-item")}>
                    <Link className={cx("menu-user-link")} to="/login">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
