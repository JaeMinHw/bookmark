import style from "./Home.module.css";
import Title from "../components/Title";
import "./Home.module.css";
function Home() {
  return (
    <div>
      <Title />

      <div className={style.box}>
        <div className={style.group}>
          <input required="" id="input" type="text" className={style.input} />
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
          />
          <span className={style.highlight}></span>
          <span className={style.bar}></span>
          <label className={style.label}>PW</label>
        </div>
        <div className={style.btn}>
          <button>
            <span>Button</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
