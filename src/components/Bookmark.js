import style from "./Bookmark.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// 입력한 회원의 bookmark를 json 형식으로 받아 보여준다. movie랑 똑같은 형식이다.
function Bookmark({ n, ID, link, favName, favImage }) {
  return (
    <div className={style.item}>
      <img src={favImage} alt={favName} className={style.book} />
      <h2 className={style.book_name}>
        <Link to={`/modibook/${localStorage.getItem("ID")}/${n}`}>
          {favName}
        </Link>
      </h2>
    </div>
  );
}

Bookmark.propTypes = {
  num: PropTypes.number.isRequired,
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
