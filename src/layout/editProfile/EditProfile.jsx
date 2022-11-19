import React from "react";
import classNames from "classnames/bind";
import styles from "./EditProfile.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
export default function Profile() {
  const navigate = useNavigate();
  const handleChangeProfile = (e) => {
    navigate("/profile");
  };
  return (
    <div className={cx("profile-container")}>
      <div className={cx("row")}>
        <div className={cx("profile")}>
          <div className={cx("profile-info")}>
            <div className={cx("avatarBox")}>
              <img
                src={require("./../../assets/images/Avatar-am-nhac.jpg")}
                alt=""
                className={cx("image")}
              />
            </div>
            <div className={cx("infoBox")}>
              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Name:</div>

                <div class="col-lg-8 col-12 b">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={cx("form-input")}
                  />
                </div>
              </div>

              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Email:</div>

                <div class="col-lg-8 col-12 b">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={cx("form-input")}
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-12 boldd">Birthday:</div>

                <div class="col-lg-8 col-12 b">
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className={cx("form-input")}
                  />
                </div>
              </div>
              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Hobbies:</div>

                <div class="col-lg-8 col-12 b">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={cx("form-input")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={cx("action")}>
            <button
              className={cx(
                "ModifyProfile",
                "profile-card__button",
                "button--blue",
                "js - message - btn"
              )}
              onClick={handleChangeProfile}
            >
              Save
            </button>
            <Link
              to="/profile"
              className={cx(
                "ChangePass",
                "profile-card__button",
                "button--blue",
                "js - message - btn"
              )}
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
