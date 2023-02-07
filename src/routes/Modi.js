import { useParams } from "react-router-dom";
function Modi() {
  const { id, userID } = useParams();
  return (
    <div>
      {id} {userID}
    </div>
  );
}

export default Modi;
