import { useSelector } from "react-redux";

import User from "./User";
import { getUsersArray } from "../../store/slices/users/selectors";

const Leaderboard = () => {
  const users = useSelector(getUsersArray);
  return (
    <div>
      {users.map(({ id, name, rating, teamId }, index) => (
        <User
          id={id}
          key={id}
          name={name}
          rating={rating}
          teamId={teamId}
          place={index + 1}
        />
      ))}
    </div>
  )
};

export default Leaderboard;
