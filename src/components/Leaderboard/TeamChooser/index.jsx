import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import userSlice from "../../../store/slices/users";
import { getTeams } from "../../../store/slices/teams/selectors";

const TeamChooser = ({ userId, teamId: userTeamId }) => {
  const dispatch = useDispatch();
  const teams = useSelector(getTeams);

  const teamInputHandler = useCallback((teamId) => {
    dispatch(userSlice.actions.setUserTeam({
      userId,
      teamId: teamId === userTeamId ? null : teamId
    }));
  }, [dispatch, userId, userTeamId]);

  return (
    <div>
      {teams.map(team => (
        <input
          type="checkbox"
          checked={team.id === userTeamId}
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
