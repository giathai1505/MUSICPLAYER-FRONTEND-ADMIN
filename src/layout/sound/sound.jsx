import React from "react";
import classNames from "classnames/bind";
import styles from "./sound.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/modal/Modal";

<html xmlns="http://www.w3.org/1999/xhtml" lang="en"></html>;
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cx("home-container")}>
      <div id="content">
        <div class="row">
          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_1" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower1">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/ocean.svg"
                  title="Ocean waves"
                  alt="ocean"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider1">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/ocean.svg"
                  title="Ocean waves"
                  alt="ocean image"
                  class="img2"
                />
              </a> */}
              {/* <div class={cx("marginal")} id="slvolume1">
                <input
                  id="my-input1"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_7" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower7">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/brook.svg"
                  alt="River"
                  title="river"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider7">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/brook.svg"
                  alt="River"
                  title="river image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume7">
                <input
                  id="my-input7"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                ></input>
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_13" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower13">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/rain.svg"
                  title="Rain"
                  alt="rain"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider13">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/rain.svg"
                  title="Rain"
                  alt="rain image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume13">
                <input
                  id="my-input13"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_2" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower2">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/forest.svg"
                  title="Forest"
                  alt="forest"
                  class="img1 shadow"
                  onclick="document.getElementById('birds').style.display='inline';"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider2">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/forest.svg"
                  title="Forest"
                  alt="forest image"
                  class="img2"
                  onclick="document.getElementById('birds').style.display='none';"
                />
              </a>
              <div class="marginal" id="slvolume2">
                <input
                  id="my-input2"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_8" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower8">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/fire.svg"
                  title="Crackling fireplace"
                  alt="fireplace"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider8">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/fire.svg"
                  title="Crackling fireplace"
                  alt="fireplace image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume8">
                <input
                  id="my-input8"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_14" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower14">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/thunder.svg"
                  title="Thunder"
                  alt="thunder"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider14">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/thunder.svg"
                  title="Thunder"
                  alt="thunder image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume14">
                <input
                  id="my-input14"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_3" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower3">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/wind.svg"
                  title="Wind"
                  alt="wind"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider3">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/wind.svg"
                  title="Wind"
                  alt="wind image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume3">
                <input
                  id="my-input3"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_9" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower9">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/moon.svg"
                  title="At night"
                  alt="night"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider9">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/moon.svg"
                  title="At night"
                  alt="night image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume9">
                <input
                  id="my-input9"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_20" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower20">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/leafs.svg"
                  title="Leaves"
                  alt="leaves"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider20">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/leafs.svg"
                  title="Leaves"
                  alt="leaves image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume20">
                <input
                  id="my-input20"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_16" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower16">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/bell.svg"
                  title="Wind chime"
                  alt="windchime"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider16">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/bell.svg"
                  title="Wind chime"
                  alt="wind chime image"
                  class="img2 wobble-hor-top"
                />
              </a>
              <div class="marginal" id="slvolume16">
                <input
                  id="my-input16"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_15" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower15">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/snow.svg"
                  title="Snow storm"
                  alt="snow"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider15">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/snow.svg"
                  title="Snow storm"
                  alt="snow image"
                  class="img2 flip-diagonal-1-bl"
                />
              </a>
              <div class="marginal" id="slvolume15">
                <input
                  id="my-input15"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_17" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower17">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/cafe.svg"
                  title="Café"
                  alt="cafe"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider17">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/cafe.svg"
                  title="Café"
                  alt="cafe image"
                  class="img2 rotate-90-ccw"
                />
              </a>
              <div class="marginal" id="slvolume17">
                <input
                  id="my-input17"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_12" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower12">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/fan.svg"
                  title="Air fan"
                  alt="fan"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider12">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/fan.svg"
                  title="Air fan"
                  alt="fan image"
                  class="img2 rotate-center"
                />
              </a>
              <div class="marginal" id="slvolume12">
                <input
                  id="my-input12"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_6" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower6">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/train.svg"
                  title="Train"
                  alt="train"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider6">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/train.svg"
                  title="Train"
                  alt="train image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume6">
                <input
                  id="my-input6"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>

          <div class="col-xs-6 col-sm-4">
            <div id="jp_container_5" class={cx("info")}>
              <a href="javascript:;" class="jp-play" id="shower5">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/library.svg"
                  title="Campus library"
                  alt="library"
                  class="img1 shadow"
                />
              </a>
              {/* <a href="javascript:;" class="jp-pause" id="hider5">
                <img
                  src="https://g2k7z4f8.ssl.hwcdn.net/defonic/images/icons/library.svg"
                  title="Campus library"
                  alt="book image"
                  class="img2"
                />
              </a>
              <div class="marginal" id="slvolume5">
                <input
                  id="my-input5"
                  type="text"
                  data-slider="true"
                  value="0.8"
                  data-slider-highlight="true"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
