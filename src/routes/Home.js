import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.css";
import Title from "../components/Title";

import "./Home.module.css";
function Home() {
  const navigate = useNavigate();
  const [ID, setId] = useState("");
  const [Pw, setPw] = useState("");

  const getLogin = async () => {
    const json = await (
      await fetch(`http://127.0.0.1:5000/login/${ID}/${Pw}`)
    ).json();

    if (json.result === "success") {
      alert("로그인 성공입니다. \n" + json.name + "님 안녕하세요.");
      localStorage.setItem("ID", json.ID);
      localStorage.setItem("pw", json.pw);
      localStorage.setItem("name", json.name);
      navigate(`/book/${json.ID}`);
    } else {
      alert("회원정보를 확인하여주세요");
    }
  };

  const onIDHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPWHandler = (event) => {
    setPw(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    getLogin();
  };
  return (
    <div>
      <Title />

      <div className={style.box}>
        <div className={style.group}>
          <input
            required=""
            id="input"
            type="text"
            className={style.input}
            onChange={onIDHandler}
          />
          <span className={style.highlight}></span>
          <span className={style.bar}></span>
          <label>ID</label>
        </div>
        <div className={style.pwgroup}>
          <input
            required=""
            id="input2"
            type="password"
            className={style.input2}
            onChange={onPWHandler}
          />
          <span className={style.highlight}></span>
          <span className={style.bar}></span>
          <label className={style.label}>PW</label>
        </div>
        <div className={style.btn}>
          <button onClick={onSubmitHandler}>
            <span>로그인</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
