import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Bookmodi.module.css";
import ImageComponent from "./ImageComponent";

function Bookmodi({ id, userID, favName, favImage, link }) {
  const navigate = useNavigate();
  const [favname, setFavname] = useState(favName);
  const [Link, setLink] = useState(link);
  const getModi = async () => {
    const json = await (
      await fetch(
        `http://127.0.0.1:5000/modibook/${userID}/${id}/${favname}/${Link}`
      )
    ).json();
    console.log(json);
    if (json.result === "success") {
      alert("수정이 완료되었습니다.");
      navigate(`/book/${userID}}`);
    } else {
      alert("수정이 실패되었습니다 \n. 다시한번 확인하여주세요");
    }
  };

  const getDelete = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:5000/delebook/${userID}/${id}`)
    ).json();
    console.log(json);
    if (json.result === "success") {
      alert("삭제가 완료되었습니다.");
      navigate(`/book/${userID}}`);
    } else {
      alert("삭제가 실패되었습니다.");
    }
  };

  const onFavnameHandler = (event) => {
    setFavname(event.currentTarget.value);
  };
  const onlinkHandler = (event) => {
    setLink(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    getModi();
  };
  const deleteSubmit = (event) => {
    // delete를 클릭하면 서버에 해당하는 모든 값(넘저 제외)하고 다 null
    event.preventDefault();
    getDelete();
  };

  return (
    <div className={style.card}>
      <div className={style.img}>
        {link ? (
          <ImageComponent key={favName} li={link} name={favName} />
        ) : null}
      </div>
      <input
        className={style.card__title}
        type="text"
        onChange={onFavnameHandler}
        value={favname}
      ></input>
      <input
        className={style.card__content}
        type="text"
        value={Link}
        onChange={onlinkHandler}
      ></input>
      <div className={style.card__date}>{id}</div>
      <button onClick={onSubmitHandler} className={style.bt}>
        <div className={style.svg}>
          <div className={style.svg_wrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </button>

      <button className={style.noselect} onClick={deleteSubmit}>
        <span className={style.text}>Delete</span>
        <span className={style.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}

Bookmodi.propTypes = {
  id: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};

export default Bookmodi;
