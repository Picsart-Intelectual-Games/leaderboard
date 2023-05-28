import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import userSlice from "../../../store/slices/users";
import { getTeamsArray } from "../../../store/slices/teams/selectors";
import useStyles from "./styles";

const TeamChooser = ({ userId, teamId: userTeamId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const teams = useSelector(getTeamsArray);

  const teamInputHandler = useCallback((e) => {
    dispatch(userSlice.actions.setUserTeam({
      userId,
      teamId: e.target.value,
    }));
  }, [dispatch, userId]);

  return (
    <select
      className={classes.root}
      onChange={teamInputHandler}
      name={`${userId}-teams`}
    >
      <option value="">Select Team</option>
      {teams.map(team => (
        <option
          key={team.id}
          value={team.id}
        >
          {team.name}
        </option>
      ))}
    </select>
  );
};

export default memo(TeamChooser);
