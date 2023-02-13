import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Bookmodi from "../components/Bookmodi";

function Modi() {
  const { id, userID } = useParams();
  return (
    <div>
      <Title />
      <Bookmodi key={id} id={id} userID={userID} />
    </div>
  );
}

export default Modi;
