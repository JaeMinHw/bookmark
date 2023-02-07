import style from "./Title.module.css";
function Title() {
  return (
    <div className={style.roo}>
      <div className={style.title}>나만의 즐겨찾기 </div>
      <button className={style.button}>로그아웃</button>
    </div>
  );
}
export default Title;
