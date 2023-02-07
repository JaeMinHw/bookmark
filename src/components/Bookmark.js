import style from "./Bookmark.module.css";
function Bookmark() {
  return (
    <div className={style.contain}>
      <div className={style.item}>click me</div>
      <div className={style.item}>click me</div>
      <div className={style.item}>click me</div>

      {/* <div className={style.movies}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
      </div> */}
    </div>
  );
}
export default Bookmark;
