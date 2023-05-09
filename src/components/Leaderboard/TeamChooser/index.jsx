import { memo, useCallback } from "react";
import { useSelector } from "react-redux";

import { getTeams } from "../../../store/slices/teams/selectors";

const TeamChooser = ({ userId }) => {
  const teams = useSelector(getTeams);

  const teamInputHandler = useCallback((teamId) => {
    
  }, []);

  return (
    <div>
      {teams.map(team => (
        <input
          type="radio"
          key={team.id}
          name={userId}
          value={team.id}
          onChange={() => teamInputHandler(team.id)}
        />
      ))}
    </div>
  );
};

export default memo(TeamChooser);
