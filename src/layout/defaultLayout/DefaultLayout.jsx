import React from "react";
import Header from "../../components/header/Header";
import classNames from "classnames/bind";
import styles from "./defaultLayout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import Playing from "../../components/playing/Playing";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("main")}>
        <Header></Header>
        <main className={cx("content")}>
          <div className="col-md-9">{children}</div>
          <div className="col-md-3">
            <Playing />
          </div>
        </main>
      </div>
    </div>
  );
}
