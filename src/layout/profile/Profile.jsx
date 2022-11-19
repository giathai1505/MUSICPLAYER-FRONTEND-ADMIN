import React from "react";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Profile() {
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

                <div class="col-lg-8 col-12 b">Đặng Hồng Nhung</div>
              </div>

              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Email:</div>

                <div class="col-lg-8 col-12 b">hongnhung2507@gmail.com</div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-12 boldd">Birthday:</div>

                <div class="col-lg-8 col-12 b">25/07/2001</div>
              </div>
              <div class="row my-2">
                <div class="col-lg-4 col-12 boldd">Hobbies:</div>

                <div class="col-lg-8 col-12 boldd">walking, reading book</div>
              </div>
            </div>
          </div>

          <div className={cx("action")}>
            <Link
              to="/editProfile"
              className={cx(
                "ModifyProfile",
                "profile-card__button",
                "button--blue",
                "js - message - btn"
              )}
            >
              Modify Profile
            </Link>
            <Link
              to="/changePassword"
              className={cx(
                "ChangePass",
                "profile-card__button",
                "button--blue",
                "js - message - btn"
              )}
            >
              Change Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
