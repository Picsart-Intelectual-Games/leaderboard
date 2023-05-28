import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import teamsSlice from "../../../store/slices/teams";

const AddTeam = () => {
  const dispatch = useDispatch();

  const [newTeamName, setNewTeamName] = useState('');

  const createTeamHandler = useCallback(() => {
    dispatch(teamsSlice.actions.setTeams({
      id: Math.random(),
      name: newTeamName,
      score: 0,
    },));
    setNewTeamName('');
  }, [dispatch, newTeamName]);

  return (
    <div>
      <input
        value={newTeamName}
        onChange={e => setNewTeamName(e.target.value)}
      />
      <button
        onClick={createTeamHandler}
        disabled={!newTeamName}
      >
        Create a Team
      </button>
    </div>
  )
};

export default AddTeam;
