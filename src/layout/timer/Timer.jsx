import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./timer.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export default function Timer() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const Hours = [
    {
      time: "01",
    },
    {
      time: "02",
    },
    {
      time: "03",
    },
    {
      time: "04",
    },
    {
      time: "05",
    },
    {
      time: "06",
    },
    {
      time: "07",
    },
    {
      time: "08",
    },
    {
      time: "09",
    },
    {
      time: "10",
    },
    {
      time: "11",
    },
    {
      time: "12",
    },
  ];
  const Minute = [
    {
      time: "10",
    },
    {
      time: "20",
    },
    {
      time: "30",
    },
    {
      time: "40",
    },
    {
      time: "50",
    },
    {
      time: "60",
    },
  ];

  const handleClickAddHour = (e) => {
    const timeInput = document.querySelectorAll(`.${cx("time-input")}`);
    timeInput.forEach((el) => el.classList.remove(`${cx("focus")}`));
    const parent = e.target.parentNode.parentNode;
    parent.classList.add(`${cx("focus")}`);
    // console.log(timeInput);
  };
  const handleClickAddMinute = (e) => {
    const timeInput = document.querySelectorAll(`.${cx("time-input")}`);
    timeInput.forEach((el) => el.classList.remove(`${cx("focus")}`));
    const parent = e.target.parentNode.parentNode;
    parent.classList.add(`${cx("focus")}`);
  };
  const handleChooseHouse = (e) => {
    const val = e.target.innerHTML;
    setHour(val.split(" ")[0]);
    const parent = e.target.parentNode.parentNode;
    const btn = document.querySelector(`.${cx("action")}`);
    btn.classList.add(`${cx("active")}`);
    parent.classList.remove(`${cx("focus")}`);
  };
  const handleChooseMinute = (e) => {
    const val = e.target.innerHTML;
    setMinute(val.split(" ")[0]);
    const parent = e.target.parentNode.parentNode;
    const btn = document.querySelector(`.${cx("action")}`);
    btn.classList.add(`${cx("active")}`);
    parent.classList.remove(`${cx("focus")}`);
  };

  const handleSubmit = (e) => {
    //
  };
  return (
    <section className={cx("timer")}>
      <h2 className={cx("title")}>Timer to stop playing music</h2>
      <div className={cx("box")}>
        <div className={cx("time-picker")}>
          <div className={cx("time-input")}>
            <div className={cx("control")} onClick={handleClickAddHour}>
              <input type="text" value={hour || "00"} />
              <label htmlFor="">Hour</label>
            </div>
            <div className={cx("time-option")}>
              {Hours.map((el, idx) => (
                <div
                  key={idx}
                  className={cx("time-option-item")}
                  onClick={handleChooseHouse}
                >
                  {el.time} Hour
                </div>
              ))}
            </div>
          </div>
          <div className={cx("dot")}>:</div>
          <div className={cx("time-input")}>
            <div className={cx("control")} onClick={handleClickAddMinute}>
              <input type="text" value={minute || "00"} />
              <label htmlFor="">Minute</label>
            </div>
            <div className={cx("time-option")}>
              {Minute.map((el, idx) => (
                <div
                  key={idx}
                  className={cx("time-option-item")}
                  onClick={handleChooseMinute}
                >
                  {el.time} Hour
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className={cx("desc")}>Choose the time to stop playing music</h3>
        <Link className={cx("action")} to="/" onClick={handleSubmit}>
          Save
        </Link>
      </div>
    </section>
  );
}
