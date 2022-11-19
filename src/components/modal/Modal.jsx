import React from "react";
import classNames from "classnames/bind";
import styles from "./modal.module.scss";

const cx = classNames.bind(styles);
export default function Modal() {
  const handleCloseModal = (e) => {
    const modal = document.querySelector(`.${cx("modal")}`);
    modal.classList.add(`${cx("close")}`);
  };

  return (
    <div className={cx("modal")}>
      <h3 className={cx("heading")}> Melody for Emotion</h3>
      <p className={cx("title")}>How do you feel today?</p>
      <div className={cx("answer")}>
        <button className={cx("btn-happy")}>happy</button>
        <button className={cx("btn-sad")}>Sad</button>
        <button className={cx("btn-lovely")}>Lovely</button>
      </div>

      <div className={cx("action")}>
        <button className={cx("btn-cancel")} onClick={handleCloseModal}>
          Back
        </button>
        <button className={cx("btn-ok")}>Ok</button>
      </div>
    </div>
  );
}
