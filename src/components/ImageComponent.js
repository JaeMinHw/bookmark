import style from "./Bookmark.module.css";
function ImageComponent({ li, name }) {
  const url = "https://www.google.com/s2/favicons?sz=64&domain=" + li;
  //   const url1 = "brave://favicon/size/64@1x/https://www.naver.com/";
  return (
    <img src={url} alt={name} className={style.book} width={64} height={64} />
  );
}

export default ImageComponent;
