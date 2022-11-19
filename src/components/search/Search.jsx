import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import styles from "./search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [searchResult, setSearchResult] = useState(["bai1", "bai2"]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const handleHideResult = () => {
    setShowResult(false);
    console.log("hide");
  };
  const handleShowResult = () => {
    setShowResult(true);
    console.log("show");
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(value);
    }
  };
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
  };

  const dataMusic = ["Drive My Car", "abc", "1123"]; // lay data tu redux (call api bo vao reducer)

  const renderData = () => {
    return dataMusic?.map((music, index) => (
      <li className={cx("search-item")}>
        <Link className={cx("search-link")} onClick={handleClick}>
          <FontAwesomeIcon icon={faSearch} />
          <p className={cx("text")}>{music}</p>
        </Link>
      </li>
    ));
  };

  return (
    <>
      {console.log(showResult)}
      <Tippy
        interactive
        // visible={showResult && searchResult.length > 0}
        // visible={showResult && searchResult.length > 0}
        offset={[0, -35]}
        // visible
        zIndex={1}
        render={(attrs) =>
          showResult &&
          searchResult.length > 0 && (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <div className={cx("search-content")}>
                <ul className={cx("search-list")}>{renderData()}</ul>
              </div>
            </div>
          )
        }
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <button className={cx("icon-search")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input
            ref={inputRef}
            placeholder="search..."
            className={cx("input-search")}
            value={searchValue}
            spellCheck={false}
            onChange={onChangeInput}
            onFocus={handleShowResult}
            onBlur={handleHideResult}
          />
          {!!searchValue && !loading && (
            <button className={cx("icon-close")} onClick={handleClear}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
        </div>
      </Tippy>
    </>
  );
}
