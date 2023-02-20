import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import Title from "../components/Title";
import Bookmodi from "../components/Bookmodi";
console.log("hello");
function Modi() {
  var [fav1, setFav1] = useState([]);
  const { id, userID } = useParams();

  const getFav1 = useCallback(async () => {
    const json1 = await (
      await fetch(`http://127.0.0.1:5000/choosebook/${userID}/${id}`)
    ).json();

    if (json1.result1 === "success") {
      // // console.log(json.list.length);
      // // console.log(json.list[0]);
      setFav1(json1.list1);
    }
  }, [userID, id]);

  useEffect(() => {
    getFav1();
  }, [getFav1]);

  return (
    <div>
      <Title />
      <div>
        {/* <Bookmodi key={fav1.num} id={fav1.num} userID={fav1.ID} /> */}
        {fav1.map((book) => (
          <Bookmodi
            key={book.num}
            id={book.num}
            userID={book.ID}
            favName={book.favName}
            favImage={book.favImage}
            link={book.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Modi;
