import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { listSidebars } from "./data";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <section className={cx("sidebar")}>
      <div className="flex items-center flex-col gap-2">
        <img
          className="w-[100px]"
          src={require("./../../assets/images/Logo-Offical-gadient.png")}
          alt="logo"
        ></img>
        <p className="text-sm text-white">Melody for emotion</p>
      </div>
      <div className="mt-[50px] relative">
        <ul className={cx("list")}>
          {listSidebars.map((item, index) => {
            return (
              <li className={cx("item")}>
                <Link className={cx("link")} to={item.path}>
                  {item.icon}
                  <p className={cx("text")}>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="absolute bottom-0">
        <div className="flex flex-col gap-2 mb-4 ml-5">
          <Link className={cx("link")} to="/setting">
            <AiOutlineSetting />
            <p className={cx("text")}>Admin</p>
          </Link>
          <Link className={cx("link")} to="/setting">
            <AiOutlineLogout />
            <p className={cx("text")}>Logout</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
