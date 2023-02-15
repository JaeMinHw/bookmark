import style from "./Bookmark.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ImageComponent from "./ImageComponent";

// 입력한 회원의 bookmark를 json 형식으로 받아 보여준다. movie랑 똑같은 형식이다.
function Bookmark({ n, ID, link, favName, favImage }) {
  return (
    <Link to={`/modibook/${localStorage.getItem("ID")}/${n}`}>
      <div className={style.item}>
        {/* <img src={favImage} alt={favName} className={style.book} /> */}
        {link ? (
          <ImageComponent key={favName} li={link} name={favName} />
        ) : null}
        <h2 className={style.book_name}>{favName}</h2>
      </div>
    </Link>
  );
}

Bookmark.propTypes = {
  n: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
};

export default Bookmark;

// function Movie({ id, coverImg, title, year, summary, genres }) {
//   return (
//     <div className={styles.movie}>
//       <img src={coverImg} alt={title} className={styles.movie__img} />
//       <div>
//         <h2 className={styles.movie__title}>
//           <Link to={`/movie/${id}`}>{title}</Link>
//         </h2>
//         <h3 className={styles.movie__year}>{year}</h3>
//         <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
//         <ul className={styles.movie__genres}>
//           {genres.map((g) => (
//             <li key={g}>{g}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
