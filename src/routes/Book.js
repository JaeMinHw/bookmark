import { useEffect, useState } from "react";
import Title from "../components/Title";
import Bookmark from "../components/Bookmark";
import style from "../components/Bookmark.module.css";

function Book() {
  const [fav, setFav] = useState([]);
  const getFav = async () => {
    const json = await (
      await fetch(
        `http://127.0.0.1:5000/bookmark/${localStorage.getItem("ID")}`
      )
    ).json();
    // setFav(json.data.movies);
    if (json.result === "success") {
      setFav(json.list);
      // // console.log(json.list.length);
      // // console.log(json.list[0]);
      console.log(json);
    }
  };
  useEffect(() => {
    getFav();
  }, []);
  return (
    <div>
      <Title />
      <div className={style.contain}>
        {fav.map((bookma) => (
          <Bookmark
            key={bookma.num}
            n={bookma.num}
            ID={bookma.ID}
            link={bookma.link}
            favImage={bookma.favImage}
            favName={bookma.favName}
          />
        ))}

        {/* 이런 식으로 map을 이용해서 다 표현해준다 */}
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
    </div>
  );
}

export default Book;
