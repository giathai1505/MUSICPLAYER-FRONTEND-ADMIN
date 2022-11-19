import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./playing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faPauseCircle,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

export default function Playing() {
  const [iconChange, setIconChange] = useState(faCirclePlay);
  const handlePlaying = (e) => {
    if (iconChange === faCirclePlay) {
      setIconChange(faPauseCircle);
    }
    if (iconChange === faPauseCircle) {
      setIconChange(faCirclePlay);
    }
  };
  return (
    <div className={cx("playing-song")}>
      <div className={cx("player-box")}>
        <div className={cx("player-media")}>
          <img
            src={require("./../../assets/images/image.png")}
            alt=""
            className={cx("player-image")}
          />
        </div>
        <h3 className={cx("song-title")}>End of time</h3>
        <h3 className={cx("song-desc")}>K-391, Alan Walker & Ahrix</h3>
        <p className={cx("song-lyric")}>No, lyric</p>
        <div className={cx("progress")}>
          <input
            type="range"
            id="progress-bar"
            min="0"
            max=""
            value="0"
            className={cx("bar")}
          />
          <audio src="./files/holo.mp3" id="song"></audio>
        </div>
        <div className={cx("player-number")}>
          <span className={cx("player-remaining")}>0:00</span>
          <td className="d-flex">
            <button class={cx("repeat", "btn-action")}>
              <FontAwesomeIcon
                icon={faRepeat}
                className={cx("icon")}
              ></FontAwesomeIcon>
            </button>

            <button class={cx("back", "btn-action")}>
              <FontAwesomeIcon
                icon={faBackwardStep}
                className={cx("icon")}
              ></FontAwesomeIcon>
            </button>
            <button class={cx("play-song", "btn-action")}>
              <FontAwesomeIcon
                icon={iconChange}
                className={cx("icon")}
                onClick={handlePlaying}
              ></FontAwesomeIcon>
            </button>
            <button class={cx("forward", "btn-action")}>
              <FontAwesomeIcon
                icon={faForwardStep}
                className={cx("icon")}
              ></FontAwesomeIcon>
            </button>
          </td>
          <span className={cx("player-duration")}>0:00</span>
        </div>
      </div>

      <div className={cx("player-tool")}></div>
    </div>
  );
}
